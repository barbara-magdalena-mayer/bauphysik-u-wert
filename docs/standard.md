# Standard für Lerneinheiten

So entstehen Einheiten in dieser Werkstatt. Der Standard sorgt dafür, dass jede Einheit gleich aufgebaut, technisch austauschbar und überprüfbar ist.

## 1 · Didaktischer Aufbau (sechs Schritte)

| Schritt | Funktion | Pflicht |
|---|---|---|
| Auftrag | Ein konkreter Fall aus der Praxis, eine offene Frage | ja |
| Wissen | Nur das, was zur Lösung nötig ist; Formeln mit Beispiel | ja |
| Werkstatt | Interaktives Werkzeug: ausprobieren, nicht nur lesen | ja |
| Zweite Perspektive | Zuschaltbare, fehlbare KI; Aussagen prüfen | optional, nicht bewertet |
| Test | 4–6 Fragen, jede mit Erklärung | ja |
| Abschluss | Rückkehr zum Auftrag, Fragen zum Weiterdenken | ja |

**Regel:** Der Auftrag am Anfang wird am Ende beantwortet. Wer die Einheit durchläuft, kann die Eingangsfrage selbst lösen.

## 2 · Die fehlbare KI

- Drei Aussagen pro Einheit: **eine richtig, eine falsch, eine „kommt drauf an“**
- Jede Aussage muss mit dem Werkzeug aus Schritt 3 überprüfbar sein
- Die falsche Aussage greift einen typischen Denkfehler auf (z. B. „dicker = besser“)
- Die Rückmeldung erklärt den Weg, nicht nur das Ergebnis

## 3 · Technik

- Eine HTML-Datei, kein Framework, keine externen Bibliotheken
- `scorm.js` unverändert übernehmen; die Einheit ruft nur `SCORM.reportScore(score, passMark)` auf
- Läuft ohne LMS (Standalone-Modus) und mit LMS, auch wenn `scorm.js` fehlt (Ersatzobjekt am Anfang des Skripts)
- Farben über CSS-Variablen, heller und dunkler Modus
- Mobil zuerst: muss auf 360 px Breite bedienbar sein

## 4 · Barrierefreiheit

- Alle Eingaben haben ein Label (`label` oder `aria-label`)
- Ergebnisse, die sich ändern, stehen in einem `aria-live`-Bereich
- Bedienung vollständig mit Tastatur möglich, sichtbarer Fokus
- Farbe ist nie die einzige Information (Badge sagt „erfüllt“ / „nicht erfüllt“)

## 5 · Fachliche Absicherung

- Normen und Quellen im README nennen
- Jede Zahl in Aufgaben und KI-Aussagen einmal nachgerechnet (siehe Prüfprotokoll)
- Hinweis, dass die Einheit dem Lernen dient und keinen Nachweis ersetzt

## 6 · Checkliste vor Veröffentlichung

- [ ] Auftrag wird im Abschluss beantwortet
- [ ] Alle Rechenwerte nachgerechnet
- [ ] SCORM-Paket in einem Test-LMS hochgeladen, Ergebnis kommt an
- [ ] Auf dem Handy durchgespielt
- [ ] Nur mit Tastatur durchgespielt
