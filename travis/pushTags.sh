#!/bin/bash
git add --force dist/
mversion patch
git add .
VERSION="$(grep version package.json | head -1 | awk -F: '{print $2}' | sed 's/[",]//g' | tr -d '[:space:]')"
echo $VERSION
git tag -a "v${VERSION}" -m "Release v${VERSION} [ci skip]"
git tag
git push --follow-tags
