#!/usr/bin/env sh

source ./vars.txt

sudo ./pb/pocketbase serve &
pnpm run build
scp -i ${SSH_KEY} -r ./dist/* ${USER}@${HOST}:${DIR}
