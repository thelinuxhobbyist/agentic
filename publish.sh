#!/usr/bin/env bash
set -euo pipefail

echo "Ensure you have Wrangler installed and logged in: https://developers.cloudflare.com/workers/cli-wrangler"
echo "Make sure you replaced YOUR_ACCOUNT_ID_HERE in wrangler.toml with your account id."

# Build step (none for this plain static site)

# Publish the site to Workers (Workers Sites)
wrangler publish

echo "Published. If you used workers_dev, visit the assigned workers.dev URL shown above."
