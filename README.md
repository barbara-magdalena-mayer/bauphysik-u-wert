# Bauphysik: Der U-Wert einer Außenwand

Eine interaktive Lerneinheit zum Wärmeschutz. Lernende sanieren eine Altbauwand rechnerisch, prüfen das Ergebnis gegen einen Anforderungswert und beurteilen die Vorschläge einer KI, die auch falsch liegen kann.

**[▶ Einheit ausprobieren](https://barbara-magdalena-mayer.github.io/bauphysik-u-wert/)** · **[SCORM-Paket herunterladen](https://barbara-magdalena-mayer.github.io/bauphysik-u-wert/bauphysik-u-wert_scorm12.zip)**

---

## Was die Einheit kann

| | |
|---|---|
| **Thema** | Wärmedurchlasswiderstand, U-Wert mehrschichtiger Bauteile, Sanierungsnachweis |
| **Zielgruppe** | Ausbildung Bau und Ausbau, Weiterbildung Energieberatung, Technikerschule |
| **Dauer** | ca. 20 Minuten |
| **Format** | HTML/JavaScript, ohne Abhängigkeiten, läuft auf dem Handy |
| **Standard** | SCORM 1.2: importierbar in Moodle, ILIAS, SAP SuccessFactors Learning u. a. |
| **Bewertung** | Abschlusstest, Bestehensgrenze 75 %, Rückmeldung an das LMS |
| **Lizenz** | CC BY 4.0 |

## Aufbau

1. **Auftrag**: ein realer Fall (Einfamilienhaus 1958, 24 cm Vollziegel)
2. **Wissen**: R = d/λ, Übergangswiderstände, U-Wert
3. **Werkstatt**: Wand Schicht für Schicht bauen, U-Wert live berechnen, Wandschnitt sehen
4. **Zweite Perspektive**: KI dazuschalten. Ihre Aussagen sind gemischt: richtig, falsch, „kommt drauf an“. Die Lernenden prüfen sie mit ihrer eigenen Rechnung.
5. **Abschlusstest**: vier Fragen mit Erklärungen
6. **Abschluss**: Antwort an die Eigentümerin, Fragen zum Weiterdenken

## Didaktische Idee

Die Einheit ist ein digitaler *dritter Lernort*: kein Ersatz für Unterricht oder Baustelle, sondern ein Raum zum Ausprobieren. Die zuschaltbare KI ist bewusst **fehlbar**. Sie eröffnet Perspektiven, ersetzt aber nicht das eigene Urteil. Wer ihre Aussagen prüft, übt genau die Kompetenz, die im Umgang mit KI im Beruf gebraucht wird.

Im Prototyp sind die drei KI-Aussagen vorbereitet und reagieren noch nicht auf die Wand, die die Lernenden bauen.

Zum Abschluss geht es erst nach bestandenem Test (75 %). Der Test lässt sich beliebig oft wiederholen, die Erklärungen helfen beim zweiten Versuch.

## Selbst bauen und einsetzen

```bash
./build.sh            # erzeugt dist/bauphysik-u-wert_scorm12.zip
```

Das ZIP in der Lernplattform als SCORM-Paket hochladen. Ohne Lernplattform einfach `unit/index.html` im Browser öffnen. Die Einheit läuft auch, wenn `scorm.js` fehlt.

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
