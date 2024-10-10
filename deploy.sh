#!/usr/bin/env sh

source ./vars.txt

pnpm run build
rsync -rtvzP -e "ssh -i ${SSH_KEY}" dist/ ${USER}@${HOST}:${DIR}
