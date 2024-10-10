#!/usr/bin/env sh

source ./vars.txt

pnpm run build
rsync -rtvzP -e "ssh -i ${SSH_KEY}" --delete dist/ ${USER}@${HOST}:${DIR}
