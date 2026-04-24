#!/usr/bin/env bash
# From repo root: bash templates/elite-steppers-landing/pack-template.sh
# Produces elite-steppers-landing-template.zip next to this repo (parent of cwd when run from root).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${ROOT}/elite-steppers-landing-template.zip"
rm -f "$OUT"
(cd "$ROOT" && zip -r "$OUT" templates/elite-steppers-landing \
  -x "*.tsbuildinfo" -x "*/.DS_Store")
echo "Wrote $OUT"
