#!/bin/bash

# if [ npm test ]
# then
#   echo "ABC...Tests failed"
# else
#   echo "ABC...Test did not fail"
#   if 
#   then
#     npm build
#   fi
# fi

npm test && [[ $TRAVIS_TAG =~ ^v[0-9]+\.[0-9]+\.[0-9]+ ]] && npm run start-production
  