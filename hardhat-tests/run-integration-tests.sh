#!/usr/bin/env bash

set -euo pipefail

pnpm build:edr

cd "$(dirname "$0")/integration"
for i in *; do
  if [ -d "$i" ]; then
    echo "Running integration test: '$i'"
    (cd "$i" && pnpm hardhat test)
  fi
done
