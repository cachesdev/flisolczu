#!/bin/sh
set -e

echo "Running database migrations..."
pnpm exec node-pg-migrate up -j ts --tsx true --tsconfig tsconfig.json

echo "Starting application..."
exec node build
