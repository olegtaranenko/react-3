#!/usr/bin/env bash

FROM_PATH=$1
TO_PATH=$2
TMP_PATH=lesson-0

if [ -d $FROM_PATH ]; then
  mv $FROM_PATH $TMP_PATH
fi
cp -R ../react-integration/$FROM_PATH .
if [ -d $FROM_PATH ]; then
  mv $FROM_PATH $TO_PATH
  mv $TMP_PATH/node_modules $TO_PATH
fi
if [ -d $TMP_PATH ]; then
  rm -rf $TMP_PATH/
fi
git add $TO_PATH
git commit -m "clone $FROM_PATH => $TO_PATH"
