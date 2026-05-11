#!/usr/bin/env bash
set -euo pipefail

: "${CHECKPOINT_BRANCH:?CHECKPOINT_BRANCH is required}"
: "${CHECKPOINT_DIR:?CHECKPOINT_DIR is required}"
: "${CHECKPOINT_SOURCE_DIR:?CHECKPOINT_SOURCE_DIR is required}"
: "${CHECKPOINT_MESSAGE:?CHECKPOINT_MESSAGE is required}"
: "${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"
: "${GITHUB_TOKEN:?GITHUB_TOKEN is required}"

if [ ! -d "$CHECKPOINT_SOURCE_DIR" ]; then
  echo "checkpoint source missing: $CHECKPOINT_SOURCE_DIR"
  exit 0
fi

if ! find "$CHECKPOINT_SOURCE_DIR" -type f -print -quit | grep -q .; then
  echo "checkpoint source has no files: $CHECKPOINT_SOURCE_DIR"
  exit 0
fi

workdir="${RUNNER_TEMP:-/tmp}/checkpoint-push-${RANDOM}-${RANDOM}"
rm -rf "$workdir"
mkdir -p "$workdir"

cleanup() {
  rm -rf "$workdir"
}
trap cleanup EXIT

git init -q "$workdir"
git -C "$workdir" config user.name "github-actions"
git -C "$workdir" config user.email "github-actions@github.com"
git -C "$workdir" checkout --orphan checkpoint >/dev/null 2>&1

mkdir -p "$workdir/$CHECKPOINT_DIR"
cp -R "$CHECKPOINT_SOURCE_DIR/." "$workdir/$CHECKPOINT_DIR/"

git -C "$workdir" add "$CHECKPOINT_DIR"
if git -C "$workdir" diff --cached --quiet; then
  echo "checkpoint has no changes"
  exit 0
fi

git -C "$workdir" commit -m "$CHECKPOINT_MESSAGE" >/dev/null
auth_header="$(printf 'x-access-token:%s' "$GITHUB_TOKEN" | base64 | tr -d '\n')"
git -C "$workdir" \
  -c "http.https://github.com/.extraheader=AUTHORIZATION: basic ${auth_header}" \
  push --force "https://github.com/${GITHUB_REPOSITORY}.git" "HEAD:refs/heads/${CHECKPOINT_BRANCH}"

echo "pushed checkpoint branch: ${CHECKPOINT_BRANCH}"
