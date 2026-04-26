#!/usr/bin/env bash
# Rebuild all distributable template zips at the repository root.
# From repo root: bash scripts/pack-all-templates.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
for s in \
  templates/elite-steppers-landing/pack-template.sh \
  templates/hall-of-fame-page/pack-template.sh \
  templates/marketing-about-page/pack-template.sh \
  templates/marketing-donate-page/pack-template.sh \
  templates/marketing-contact-page/pack-template.sh \
  templates/legal-terms-page/pack-template.sh \
  templates/marketing-stub-pages/pack-template.sh
do
  echo "==> $s"
  bash "$s"
done
echo "Done. Committed outputs at ${ROOT}/*-template.zip"
