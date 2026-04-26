#!/usr/bin/env bash
# From repo root: bash templates/marketing-contact-page/pack-template.sh
# Produces marketing-contact-page-template.zip at repo root.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="${ROOT}/marketing-contact-page-template.zip"
rm -f "$OUT"
(cd "$ROOT" && zip -r "$OUT" templates/marketing-contact-page \
  -x "*.tsbuildinfo" -x "*/.DS_Store")
echo "Wrote $OUT"
