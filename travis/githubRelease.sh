#!/bin/bash -e

# Test if we have an release commit
msg=$(git log --format=%B -n 1 $TRAVIS_COMMIT)
if [[ $msg == Release* ]] || [[ $msg == release* ]] && [[$TRAVIS_TAG]]
then
    echo "Found tagged release"
else
    echo "No tagged release commit found"
    exit 0
fi

# Get version from commit message
version=$(echo $msg | awk '{print $2}')
echo "Releasing ${version} ..."

data="{\
\"tag_name\":\"${version}\",\
\"target_commitish\":\"${TRAVIS_COMMIT}\",\
\"name\":\"${version}\",\
\"body\":\"Release ${version}\"\
}"

body=$(curl \
    -X POST \
    -H "Content-Type: application/json" \
    -u "${GH_TOKEN}:x-oauth-basic" \
    -d "$data" \
    https://api.github.com/repos/$TRAVIS_REPO_SLUG/releases)

# Get release id
release_id=$(echo $body | grep -oP "\"id\": \d+" | head -1 | awk '{print $2}')
echo "Created release ${release_id}"
