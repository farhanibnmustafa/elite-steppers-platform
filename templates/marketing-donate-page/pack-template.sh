#!/usr/bin/env bash
# From repo root: bash templates/marketing-donate-page/pack-template.sh
# Produces marketing-donate-page-template.zip next to this repo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${ROOT}/marketing-donate-page-template.zip"
rm -f "$OUT"
(cd "$ROOT" && zip -r "$OUT" templates/marketing-donate-page \
  -x "*.tsbuildinfo" -x "*/.DS_Store")
echo "Wrote $OUT"
