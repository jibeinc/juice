#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "jjt@jibe.com"

git checkout master
git pull

eval "$(ssh-agent -s)"
chmod 600 .travis/deploy_key.pem
ssh-add .travis/deploy_key.pem
git remote set-url origin git@github.com:jibeinc/juice.git

# clear and re-create the dist directory
rm -rf dist || exit 0;
mkdir dist;

# run our compile script, discussed above
npm run build

if ! git diff-index --quiet HEAD --; then
  git add --force dist/
  git commit -m "New dist generated [ci skip]"
  git push --quiet
  else
  exit 0
fi
