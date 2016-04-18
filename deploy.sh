#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the dist directory
rm -rf dist || exit 0;
mkdir dist;

# run our compile script, discussed above
npm run build

git add --force dist/
# bump bower.json and package.json
mversion patch -m 'Bumped to %s'