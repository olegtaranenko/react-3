#!/usr/bin/env bash

FROM_PATH=$1
TO_PATH=$2
TMP_PATH=lesson-0

#cd $FROM/..
mv $FROM_PATH $TMP_PATH
cp -R ../react-integration/$FROM_PATH .
mv $FROM_PATH $TO_PATH
mv $TMP_PATH/node_modules $TO_PATH
rm -rf $TMP_PATH/
git add $TO_PATH
git commit -m "clone $FROM_PATH => $TO_PATH"
