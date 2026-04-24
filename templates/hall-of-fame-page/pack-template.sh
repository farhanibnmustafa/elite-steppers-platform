#!/usr/bin/env bash
# From repo root: bash templates/hall-of-fame-page/pack-template.sh
# Produces hall-of-fame-page-template.zip at the parent of the templates folder (repo root when run from this repo).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${ROOT}/hall-of-fame-page-template.zip"
rm -f "$OUT"
(cd "$ROOT" && zip -r "$OUT" templates/hall-of-fame-page \
  -x "*.tsbuildinfo" -x "*/.DS_Store")
echo "Wrote $OUT"
