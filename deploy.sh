#!/usr/bin/env sh

source ./vars.txt

pnpm run build
rsync -rtvzP dist/ ${USER}@${HOST}:${DIR}
