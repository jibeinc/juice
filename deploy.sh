#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "rwwagner90@gmail.com"

git checkout master
git pull

# clear and re-create the dist directory
rm -rf dist || exit 0;
mkdir dist;

# run our compile script, discussed above
npm run build

git add --force dist/

# bump bower.json and package.json

git add bower.json
git add package.json

mversion patch -m "Bump to version %s"

echo "Pushing changes"

# We redirect any output to /dev/null to hide any sensitive credential
# data that might otherwise be exposed.
git push --quiet "https://${GH_USER}:${GH_PASSWORD}@${GH_REF}" master > /dev/null 2>&1