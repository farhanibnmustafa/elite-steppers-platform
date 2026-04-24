#!/usr/bin/env bash
# From repo root: bash templates/legal-terms-page/pack-template.sh
# Produces legal-terms-page-template.zip next to this repo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${ROOT}/legal-terms-page-template.zip"
rm -f "$OUT"
(cd "$ROOT" && zip -r "$OUT" templates/legal-terms-page \
  -x "*.tsbuildinfo" -x "*/.DS_Store")
echo "Wrote $OUT"
