#!/usr/bin/env bash
# Build locally and push the static output to the EC2 instance.
#
# First-time setup:
#   1. Fill in the four variables below (or export them in your shell instead
#      of editing this file, so the key path/IP never get committed).
#   2. chmod +x deploy/deploy.sh
#
# Usage:
#   ./deploy/deploy.sh

set -euo pipefail

EC2_HOST="${EC2_HOST:-ubuntu@YOUR_ELASTIC_IP}"     # e.g. ubuntu@3.110.x.x
EC2_KEY="${EC2_KEY:-$HOME/.ssh/your-key.pem}"       # path to your .pem
REMOTE_DIR="${REMOTE_DIR:-/var/www/hgeroadshow}"
LOCAL_DIR="out"

echo "==> Building static export..."
npm run build

if [ ! -d "$LOCAL_DIR" ]; then
  echo "Build did not produce a $LOCAL_DIR directory — aborting." >&2
  exit 1
fi

echo "==> Syncing $LOCAL_DIR/ to $EC2_HOST:$REMOTE_DIR/"
rsync -avz --delete \
  -e "ssh -i $EC2_KEY" \
  "$LOCAL_DIR"/ "$EC2_HOST:$REMOTE_DIR"/

echo "==> Done. Live at https://hgeroadshow.com"
