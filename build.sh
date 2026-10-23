#!/usr/bin/env bash
# Baut das SCORM-1.2-Paket aus dem Ordner unit/.
# Ergebnis: dist/bauphysik-u-wert_scorm12.zip – in Moodle, ILIAS,
# SAP SuccessFactors usw. als SCORM-Paket hochladen.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
rm -f dist/bauphysik-u-wert_scorm12.zip
(cd unit && zip -q -r ../dist/bauphysik-u-wert_scorm12.zip imsmanifest.xml index.html scorm.js)
echo "Fertig: dist/bauphysik-u-wert_scorm12.zip"
