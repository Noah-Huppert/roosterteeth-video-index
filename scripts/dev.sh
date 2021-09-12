#!/usr/bin/env bash
declare -r PROG_DIR=$(dirname $(realpath "$0"))
declare -r REPO_DIR=$(realpath "$PROG_DIR/../")

source "$PROG_DIR/common.sh"

declare -ri EXIT_UP=20
declare -ri EXIT_LOGS=21

log "Bringing Docker Compose stack up"
run_log "docker-compose up -d" "$EXIT_UP" "Failed to bring Docker Compose stack up"

log "Tailing logs"
run_check "docker-compose logs -f --tail=20 backend" "$EXIT_LOGS" "Failed to tail logs"
