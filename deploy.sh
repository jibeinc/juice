#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
rm -rf dist || exit 0;
mkdir dist;

# run our compile script, discussed above
npm run build


# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "rwwagner90@gmail.com"

git add --force dist/
git commit -m "Auto-deploy dist"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master > /dev/null 2>&1