#!/usr/bin/env sh

source ./vars.txt

pnpm run build && scp -i ${SSH_KEY} -r ./dist/* ${USER}@${HOST}:${DIR}
