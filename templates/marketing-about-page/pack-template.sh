#!/usr/bin/env bash
# From repo root: bash templates/marketing-about-page/pack-template.sh
# Produces marketing-about-page-template.zip next to this repo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${ROOT}/marketing-about-page-template.zip"
rm -f "$OUT"
(cd "$ROOT" && zip -r "$OUT" templates/marketing-about-page \
  -x "*.tsbuildinfo" -x "*/.DS_Store")
echo "Wrote $OUT"
