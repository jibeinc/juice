#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "jjt@jibe.com"

git checkout master
git pull

# clear and re-create the dist directory
rm -rf dist || exit 0;
mkdir dist;

# run our compile script, discussed above
npm run build

git add --force dist/

# bump bower.json and package.json
mversion patch

git add bower.json
git add package.json

git commit -m "New dist generated [ci skip]"