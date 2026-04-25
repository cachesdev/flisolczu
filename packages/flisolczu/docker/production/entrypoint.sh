#!/bin/sh
set -e

pnpm exec node-pg-migrate up -j ts --tsx true --tsconfig tsconfig.json

exec node build
