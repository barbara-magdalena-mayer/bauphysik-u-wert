# Bauphysik: Der U-Wert einer Außenwand

Eine interaktive Lerneinheit zum Wärmeschutz. Lernende sanieren eine Altbauwand rechnerisch, prüfen das Ergebnis gegen einen Anforderungswert und beurteilen die Vorschläge einer KI, die auch falsch liegen kann.

**[▶ Einheit ausprobieren](https://barbara-magdalena-mayer.github.io/bauphysik-u-wert/)** · **[SCORM-Paket herunterladen](https://barbara-magdalena-mayer.github.io/bauphysik-u-wert/bauphysik-u-wert_scorm12.zip)**

---

## Was die Einheit kann

| | |
|---|---|
| **Thema** | Wärmedurchlasswiderstand, U-Wert mehrschichtiger Bauteile, Sanierungsnachweis |
| **Zielgruppe** | Ausbildung Bau und Ausbau, Weiterbildung Energieberatung, Technikerschule |
| **Dauer** | ca. 25 Minuten |
| **Format** | HTML/JavaScript, ohne Abhängigkeiten, läuft auf dem Handy |
| **Standard** | SCORM 1.2: importierbar in Moodle, ILIAS, SAP SuccessFactors Learning u. a. |
| **Lernprotokoll** | xAPI 1.0.3: jede wichtige Handlung als Statement, sichtbar als „Dein Lernweg“; optional an ein LRS |
| **Bewertung** | Abschlusstest, Bestehensgrenze 75 %, Rückmeldung an das LMS |
| **Lizenz** | CC BY 4.0 |

## Aufbau

1. **Kundenauftrag**: ein realer Fall (Einfamilienhaus 1958, 24 cm Vollziegel)
2. **Wissen**: R = d/λ, Übergangswiderstände, U-Wert, die Methode **Probe durch Einsetzen** und **Den Denkfehler benennen**
3. **Arbeitsblatt**: vier Wände A–D nebeneinander (Bestand, Sanierung, zwei freie Spalten), eine Vergleichsleiste mit allen U-Werten, das Feld „Meine Erkenntnisse“. Dazu optional die KI: Ihre Aussagen sind gemischt (richtig, falsch, „kommt drauf an“). Jede Aussage wird erst durch Einsetzen in Spalte C oder D geprüft, dann beurteilt. Zu jeder Probe notieren die Lernenden, was sie eingesetzt haben und was herauskam, und sie benennen den **Denkfehler**. Erst dann können sie urteilen. Danach sehen sie, wie der Denkfehler fachlich heißt, und vergleichen. Dazu gibt es das Feld „Meine Regeln“: Jede Regel wird offen begründet („Regel: Wenn …, dann … – weil …“).
4. **Abschlusstest**: vier Fragen mit Erklärungen. Bei jeder falschen Antwort erklären die Lernenden zuerst ihren eigenen Denkfehler, wie in einer mündlichen Prüfung. Erst dann sehen sie den typischen Denkfehler zu ihrer Antwort und können erneut auswerten oder weitergehen.
5. **Abschluss**: Antwort auf den Kundenauftrag, der eigene Erkenntnisweg (Erkenntnisse, Regeln, Proben, eigene Denkfehler), der **Lernweg** aus dem xAPI-Protokoll (siehe unten), Fragen zum Weiterdenken

Oben gibt es immer „↺ Neu beginnen“ (zweimal tippen) und auf der Website „← Werkstatt“. Spalten und Notizen bleiben auf dem eigenen Gerät gespeichert, in einer Lernplattform zusätzlich in `cmi.suspend_data`.

## Didaktische Idee

Die Einheit ist ein digitaler *dritter Lernort*: kein Ersatz für Unterricht oder Baustelle, sondern ein Raum zum Ausprobieren. Die zuschaltbare KI ist bewusst **fehlbar**. Sie eröffnet Perspektiven, ersetzt aber nicht das eigene Urteil. Wer ihre Aussagen prüft, übt genau die Kompetenz, die im Umgang mit KI im Beruf gebraucht wird.

KI kann jede und jeder benutzen. Was zählt, ist die Begründung: Wer einen Fehler macht, muss ihn darlegen können. Deshalb kommt man in dieser Einheit nicht weiter, ohne den Denkfehler zu benennen, egal ob er von der KI stammt oder von einem selbst.

Im Prototyp sind die drei KI-Aussagen vorbereitet und reagieren noch nicht auf die Wand, die die Lernenden bauen.

Zum Abschluss geht es erst nach bestandenem Test (75 %). Der Test lässt sich beliebig oft wiederholen, die Erklärungen helfen beim zweiten Versuch.

## Lernweg mit xAPI

SCORM meldet nur das Ergebnis („bestanden, 75 %“). Diese Einheit hält zusätzlich den **Weg** fest, im Standard **xAPI** (Experience API 1.0.3). Jede wichtige Handlung wird ein Satz nach dem Muster *Wer – tut was – womit – mit welchem Ergebnis*:

> lernende-3f2a… · hat zur Probe eingesetzt · KI-Vorschlag 1 · U = 1,34 W/(m²K), nicht erfüllt

Aufgezeichnet werden: Wände berechnet, Proben durch Einsetzen, Urteile über die KI-Aussagen, Notizen und offengelegte Denkfehler, Testantworten, **Selbstkorrekturen** (erst falsch, dann richtig), Rückwege zum Arbeitsblatt, Abschluss.

Auf der Website (und beim lokalen Öffnen der Datei) findet man oben auf jeder Seite den Knopf **„ⓘ Informatische Bildung: SCORM & xAPI“**. Er erklärt in einfacher Sprache den Unterschied (Abnahmeprotokoll gegen Bautagebuch), zeigt, welcher Standard gerade aktiv ist, und zeigt live den letzten xAPI-Eintrag als Satz und als JSON. Im Abschluss steht derselbe Durchlauf zweimal nebeneinander: „Abnahmeprotokoll · SCORM: bestanden · 100 %“ und „Bautagebuch · xAPI: 24 Einträge, darunter 2 Selbstkorrekturen …“. Zum Ausprobieren gibt es dazu Runde 4 im Lernspiel [„Wie baut man eine Lerneinheit?“](https://barbara-magdalena-mayer.github.io/spiele/baukasten/): Teile an- und ausschalten und sehen, was die Lehrkraft erfährt. In einer Lernplattform bleiben Knopf und Vergleich ausgeblendet, damit sie die Lernenden nicht ablenken; den eigenen Lernweg sehen sie dort trotzdem.

Im Abschluss sehen die Lernenden daraus ihren Lernweg: eine Zeitleiste mit Zählern („2 Denkfehler offengelegt, 2-mal selbst korrigiert“). Fehler werden nicht versteckt, sie gehören zum Weg. Die „Technische Ansicht“ zeigt dieselben Daten als xAPI-JSON, „Lernweg herunterladen“ speichert sie als Datei.

**Zwei Stufen**

1. **Ohne LRS (Standard):** Die Statements bleiben im Browser des Geräts. Die Person ist nur ein zufälliges Pseudonym (`lernende-xxxxxxxx`), kein Name. Nichts wird verschickt.
2. **Mit LRS:** Wird die Einheit mit den üblichen Launch-Parametern geöffnet, schickt sie jedes Statement zusätzlich an diesen Lernprotokoll-Speicher:
   ```
   index.html?endpoint=https://lrs.example/xapi/&auth=Basic%20…&actor={"account":{"homePage":"…","name":"…"}}&registration=…
   ```
   Der Zugangsschlüssel steht nur in der Startadresse und wird nicht gespeichert.

Technik: [`unit/xapi.js`](unit/xapi.js), ohne Bibliotheken. Standard-Verben von ADL (`answered`, `commented`, `passed` …), zwei eigene Verben für diese Werkstatt: `…/xapi/verbs/eingesetzt` (Probe durch Einsetzen) und `…/xapi/verbs/korrigiert` (Selbstkorrektur).

**Geprüft:** Ein vollständiger Durchlauf (mit Fehlern, Korrekturen und Rückweg) erzeugt 24 Statements. Alle sind gültig nach xAPI 1.0.3, geprüft mit ADLs Bibliothek [TinCanPython](https://github.com/RusticiSoftware/TinCanPython) und eigenen Regeln. An einen nachgebauten LRS kamen alle an. Mit einem echten LRS ist die Einheit noch nicht erprobt.

**Datenschutz:** Ein Lernweg mit Namen ist ein personenbezogenes Datum (DSGVO). Wer Stufe 2 einsetzt, braucht eine Rechtsgrundlage, muss die Lernenden informieren und sollte Pseudonyme statt Namen übergeben. Freitexte (Notizen, Denkfehler) werden mitgeschickt.

## Selbst bauen und einsetzen

```bash
./build.sh            # erzeugt dist/bauphysik-u-wert_scorm12.zip
```

Das ZIP in der Lernplattform als SCORM-Paket hochladen. Geprüft mit der SCORM-1.2-Schnittstelle [scorm-again](https://github.com/jcputney/scorm-again) (Version 3.4.7): Start, Status, Punktzahl, Lesezeichen, KI-Proben und Notizen kommen ohne Fehler an. In Moodle oder ILIAS selbst ist die Einheit noch nicht erprobt. Ohne Lernplattform einfach `unit/index.html` im Browser öffnen. Die Einheit läuft auch, wenn `scorm.js` fehlt.

Wie neue Einheiten nach demselben Muster entstehen, steht in [`docs/standard.md`](docs/standard.md).

## Fachliche Grundlagen

- Rechenverfahren nach DIN EN ISO 6946 (vereinfacht, ohne Wärmebrücken und Korrekturwerte)
- λ-Werte: typische Bemessungswerte nach DIN 4108-4
- Vergleichswert U ≤ 0,24 W/(m²K): Gebäudeenergiegesetz (GEG), Anlage 7, Außenwände bei Änderung

Die Einheit dient dem Lernen, nicht dem rechtsverbindlichen Nachweis.

## Lizenz

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de): frei nutzbar und veränderbar, auch kommerziell, mit Namensnennung. Vorschlag: „Bauphysik: Der U-Wert einer Außenwand“ von Barbara Magdalena Mayer, CC BY 4.0. Details in [`LICENSE`](LICENSE).

Entwickelt mit Unterstützung von Claude (KI); Idee, Didaktik und fachliche Prüfung: Barbara Magdalena Mayer.

---

Barbara Magdalena Mayer · [Werkstatt](https://barbara-magdalena-mayer.github.io)
