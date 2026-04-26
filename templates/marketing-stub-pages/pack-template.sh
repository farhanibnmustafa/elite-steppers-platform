#!/usr/bin/env bash
# From repo root: bash templates/marketing-stub-pages/pack-template.sh
# Produces marketing-stub-pages-template.zip next to this repo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${ROOT}/marketing-stub-pages-template.zip"
rm -f "$OUT"
(cd "$ROOT" && zip -r "$OUT" templates/marketing-stub-pages \
  -x "*.tsbuildinfo" -x "*/.DS_Store")
echo "Wrote $OUT"
