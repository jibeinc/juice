#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the dist directory
rm -rf dist || exit 0;
mkdir dist;

# run our compile script, discussed above
npm run build

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "rwwagner90@gmail.com"

git add --force dist/
# bump bower.json and package.json
mversion patch -m 'Bumped to %s'

git push "https://${GH_TOKEN}@${GH_REF}" master > /dev/null 2>&1