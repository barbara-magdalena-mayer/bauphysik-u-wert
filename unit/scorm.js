/*
 * Minimaler SCORM-1.2-Adapter
 * ---------------------------------------------------------------
 * Sucht die LMS-Schnittstelle (window.API) in den Elternfenstern.
 * Läuft die Einheit ohne LMS (z. B. direkt im Browser oder auf
 * GitHub Pages), arbeitet sie im "Standalone"-Modus weiter und
 * schreibt nur in die Konsole.
 */
const SCORM = (() => {
  let api = null;
  let active = false;

  function findAPI(win) {
    let tries = 0;
    try {
      while (win && tries < 10) {
        if (win.API) return win.API;
        if (win.parent === win) break;
        win = win.parent;
        tries++;
      }
    } catch (e) {
      // Fremde Domain im Elternfenster: kein Zugriff möglich
      console.info("[SCORM] Elternfenster nicht erreichbar:", e.message);
    }
    return null;
  }

  function init() {
    api = findAPI(window) || (window.opener ? findAPI(window.opener) : null);
    if (!api) {
      console.info("[SCORM] Kein LMS gefunden – Standalone-Modus.");
      return false;
    }
    active = api.LMSInitialize("") === "true";
    if (active) {
      const status = api.LMSGetValue("cmi.core.lesson_status");
      if (!status || status === "not attempted") {
        api.LMSSetValue("cmi.core.lesson_status", "incomplete");
      }
      api.LMSCommit("");
    }
    return active;
  }

  function set(key, value) {
    if (!active) { console.info("[SCORM]", key, "=", value); return; }
    api.LMSSetValue(key, String(value));
  }

  function commit() { if (active) api.LMSCommit(""); }

  /** Ergebnis melden: Punktzahl 0–100, bestanden ab passMark. */
  function reportScore(score, passMark) {
    set("cmi.core.score.min", 0);
    set("cmi.core.score.max", 100);
    set("cmi.core.score.raw", Math.round(score));
    set("cmi.core.lesson_status", score >= passMark ? "passed" : "failed");
    commit();
  }

  function finish() {
    if (!active) return;
    api.LMSCommit("");
    api.LMSFinish("");
    active = false;
  }

  return { init, set, commit, reportScore, finish, get isLMS() { return active; } };
})();

window.addEventListener("load", SCORM.init);
window.addEventListener("beforeunload", SCORM.finish);
