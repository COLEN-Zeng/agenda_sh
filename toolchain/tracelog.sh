#!/bin/bash

PROJECT_ROOT=$(cd "$(dirname "$0")/.." && pwd)
source "${PROJECT_ROOT}/toolchain/lib/beautified_out.sh"

LOG_DIR="${PROJECT_ROOT}/dist/logs"
cd "${LOG_DIR}" || exit

parm="-l"

case $1 in
$parm)
    filter=$(ls | fzf -m | awk 'BEGIN{a=""}{a=a"|"$1}END{print a}')
    filter=${filter:1}
    ;;
*)
    filter=""
    ;;
esac

TODAY=$(date +%F)
LOGS=$(find . -path "./basic" -prune -o -name "${TODAY}.log" -print | grep -E "${filter}")
ESC=$(printf '\033')
tail -f ${LOGS[@]} |
    sed -e "s/==>\(.*${TODAY}\.log\).*<==/${ESC}[0;36m==>\1${ESC}[0m/" \
        -e "s/\(.*\[ERROR\].*\)/${ESC}[0;31m\1${ESC}[0m/"
