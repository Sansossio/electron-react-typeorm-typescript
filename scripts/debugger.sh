#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

ARGS=$@
ARGS=${ARGS// /\~ \~}

echo $DIR

node $DIR/../node_modules/@electron-forge/cli/dist/electron-forge-start --vscode -- \~$ARGS\~
