#!/bin/bash

#cut -f1 ai-tt.tsv|uniq|tail -n+2|sed -e 's/$/,/' |xargs echo|sed -e 's/,$/"]/;s/^/["/;s/, /", "/g;'

node xlate.js > codes.json
cat codes.json |egrep -i "yikes|false|null|undefined"
node ai-tt.js > ../ai-tt.json
