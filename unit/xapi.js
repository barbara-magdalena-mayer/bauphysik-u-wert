/*
 * Kleiner xAPI-Schreiber (Experience API 1.0.3)
 * ---------------------------------------------------------------
 * Jede Handlung wird als "Statement" festgehalten:
 *   WER (actor) – TUT WAS (verb) – WOMIT (object) – ERGEBNIS (result)
 *
 * Stufe 1 (Standard): Die Statements bleiben auf diesem Gerät
 *   (localStorage) und werden der lernenden Person als Lernweg gezeigt.
 *   Die Person ist nur ein zufälliges Pseudonym, kein Name.
 *
 * Stufe 2 (optional): Wird die Einheit mit Launch-Parametern gestartet
 *   (?endpoint=…&auth=…&actor=…&registration=…, die übliche
 *   "xAPI/TinCan-Launch"-Form), schickt sie jedes Statement zusätzlich
 *   an dieses LRS. Der Zugangsschlüssel wird NICHT gespeichert.
 */
const XAPI = (() => {
  const BASE  = "https://barbara-magdalena-mayer.github.io/bauphysik-u-wert/";
  const VOCAB = "https://barbara-magdalena-mayer.github.io/xapi/";
  const ADL   = "http://adlnet.gov/expapi/verbs/";
  const KEY   = "uwert-xapi-v1";
  const MAX   = 600;   // höchstens so viele Statements lokal behalten

  /* Verben: Standard-Verben von ADL, wo es passende gibt,
     sonst eigene Verben unter VOCAB (erlaubt, solange es eine IRI ist). */
  const VERBS = {
    initialized: [ADL + "initialized", "hat begonnen",              "initialized"],
    experienced: [ADL + "experienced", "hat aufgerufen",            "experienced"],
    interacted:  [ADL + "interacted",  "hat berechnet",             "interacted"],
    probed:      [VOCAB + "verbs/eingesetzt",  "hat zur Probe eingesetzt", "tested by substitution"],
    answered:    [ADL + "answered",    "hat beantwortet",           "answered"],
    commented:   [ADL + "commented",   "hat notiert",               "commented"],
    corrected:   [VOCAB + "verbs/korrigiert",  "hat sich korrigiert",      "corrected"],
    passed:      [ADL + "passed",      "hat bestanden",             "passed"],
    failed:      [ADL + "failed",      "hat nicht bestanden",       "failed"],
    completed:   [ADL + "completed",   "hat abgeschlossen",         "completed"]
  };

  const TYPES = {
    lesson:      "http://adlnet.gov/expapi/activities/lesson",
    module:      "http://adlnet.gov/expapi/activities/module",
    interaction: "http://adlnet.gov/expapi/activities/interaction",
    question:    "http://adlnet.gov/expapi/activities/question",
    assessment:  "http://adlnet.gov/expapi/activities/assessment",
    note:        VOCAB + "activities/notiz"
  };

  const ext = name => VOCAB + "ext/" + name;

  function uuid() {
    try { if (crypto.randomUUID) return crypto.randomUUID(); } catch (e) {}
    const b = new Uint8Array(16);
    (window.crypto || {}).getRandomValues ? crypto.getRandomValues(b) : b.forEach((_, i) => b[i] = Math.random() * 256 | 0);
    b[6] = (b[6] & 0x0f) | 0x40; b[8] = (b[8] & 0x3f) | 0x80;
    const h = [...b].map(x => x.toString(16).padStart(2, "0")).join("");
    return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
  }

  let state = { actor: null, registration: null, log: [] };
  let lrs = null;            // { endpoint, auth } nur im Arbeitsspeicher
  const listeners = [];

  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "null");
      if (s && Array.isArray(s.log)) state = s;
    } catch (e) { /* kein Speicher verfügbar */ }
  }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function pseudonym() {
    return {
      objectType: "Agent",
      account: { homePage: "https://barbara-magdalena-mayer.github.io", name: "lernende-" + uuid().slice(0, 8) }
    };
  }

  /** Liest Launch-Parameter (Stufe 2). */
  function readLaunch() {
    const p = new URLSearchParams(location.search);
    const endpoint = p.get("endpoint"), auth = p.get("auth");
    if (endpoint && auth) lrs = { endpoint: endpoint.endsWith("/") ? endpoint : endpoint + "/", auth };
    try {
      const a = p.get("actor");
      if (a) {
        const actor = JSON.parse(a);
        // manche Systeme schicken Felder als Arrays (alte TinCan-Form)
        ["name", "mbox", "account"].forEach(k => { if (Array.isArray(actor[k])) actor[k] = actor[k][0]; });
        if (actor.account && actor.account.accountServiceHomePage) {
          actor.account = { homePage: actor.account.accountServiceHomePage, name: actor.account.accountName };
        }
        actor.objectType = "Agent";
        state.actor = actor;
      }
    } catch (e) { console.info("[xAPI] actor-Parameter nicht lesbar:", e.message); }
    const reg = p.get("registration");
    if (reg) state.registration = reg;
  }

  function init() {
    load();
    readLaunch();
    if (!state.actor) state.actor = pseudonym();
    if (!state.registration) state.registration = uuid();
    persist();
    flush();
  }

  /**
   * Ein Statement festhalten.
   * verb:  Schlüssel aus VERBS
   * obj:   { path, name, type }   path relativ zu BASE, "" = die Einheit selbst
   * result: xAPI-result-Objekt (optional)
   * extras: { [name]: wert } – landen in result.extensions
   */
  function record(verb, obj, result, extras) {
    const v = VERBS[verb];
    if (!v) throw new Error("Unbekanntes Verb: " + verb);
    const stmt = {
      id: uuid(),
      timestamp: new Date().toISOString(),
      actor: state.actor,
      verb: { id: v[0], display: { "de-DE": v[1], "en-US": v[2] } },
      object: {
        objectType: "Activity",
        id: BASE + (obj.path || ""),
        definition: { name: { "de-DE": obj.name }, type: TYPES[obj.type] || TYPES.interaction }
      },
      context: {
        registration: state.registration,
        language: "de-DE",
        platform: "Werkstatt Barbara Magdalena Mayer"
      }
    };
    if (obj.path) stmt.context.contextActivities = { parent: [{ objectType: "Activity", id: BASE }] };
    const res = Object.assign({}, result || {});
    if (extras && Object.keys(extras).length) {
      res.extensions = {};
      Object.entries(extras).forEach(([k, val]) => res.extensions[ext(k)] = val);
    }
    if (Object.keys(res).length) stmt.result = res;

    state.log.push({ stmt, sent: false });
    if (state.log.length > MAX) state.log.splice(0, state.log.length - MAX);
    persist();
    flush();
    listeners.forEach(fn => { try { fn(stmt); } catch (e) {} });
    return stmt;
  }

  /** Nicht gesendete Statements an das LRS schicken (nur Stufe 2). */
  let sending = false;
  async function flush() {
    if (!lrs || sending) return;
    const open = state.log.filter(e => !e.sent);
    if (!open.length) return;
    sending = true;
    try {
      const r = await fetch(lrs.endpoint + "statements", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": lrs.auth, "X-Experience-API-Version": "1.0.3" },
        body: JSON.stringify(open.map(e => e.stmt))
      });
      if (r.ok) {
        open.forEach(e => e.sent = true); persist();
        listeners.forEach(fn => { try { fn(null); } catch (e) {} });   // Anzeige "übertragen" aktualisieren
      } else console.warn("[xAPI] LRS antwortet mit", r.status);
    } catch (e) {
      console.warn("[xAPI] LRS nicht erreichbar:", e.message);
    } finally { sending = false; }
    // Was während des Sendens dazukam, gleich hinterherschicken
    if (lrs && state.log.some(e => !e.sent) && !open.some(e => !e.sent)) flush();
  }

  function reset() {
    state.log = [];
    state.registration = uuid();
    persist();
  }

  /** Verb-Schlüssel zu einem Statement ("answered" usw.). */
  function verbKey(stmt) {
    return Object.keys(VERBS).find(k => VERBS[k][0] === stmt.verb.id);
  }

  /** Letztes Statement zu einem Objekt und Verb, z. B. die letzte Antwort auf Frage 2. */
  function last(path, verb) {
    const id = BASE + path, vid = VERBS[verb][0];
    for (let i = state.log.length - 1; i >= 0; i--) {
      const s = state.log[i].stmt;
      if (s.object.id === id && s.verb.id === vid) return s;
    }
    return null;
  }

  return {
    init, record, reset, verbKey, last, ext, flush,
    onRecord: fn => listeners.push(fn),
    statements: () => state.log.map(e => e.stmt),
    sentCount: () => state.log.filter(e => e.sent).length,
    get actor() { return state.actor; },
    get connected() { return !!lrs; }
  };
})();
