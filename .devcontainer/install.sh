#! /bin/bash

set -eux

echo 'eval "$(mise activate bash)"' >> ~/.bashrc

sudo chown -R $(id -u):$(id -g) node_modules .pnpm-store

cat << EOF >> ~/.npmrc
min-release-age=7
ignore-scripts=true
EOF

mkdir -p ~/.codex
cat << EOF >> ~/.codex/config.toml

model = "gpt-5.6-sol"
model_reasoning_effort = "low"
sandbox_mode = "danger-full-access"
approval_policy = "on-request"
check_for_update_on_startup = false

[features]
fast_mode = false

[projects."/workspaces/nyamadan.github.io"]
trust_level = "untrusted"

EOF

mise install
mise x -- pnpm install
mise x -- pnpm exec astro telemetry disable
# mise x -- pnpm run prepare
mise x -- playwright-cli install --skills=agents
mise x -- playwright-cli install-browser chromium --with-deps

