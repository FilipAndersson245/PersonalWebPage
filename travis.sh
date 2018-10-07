npm test && ([[ $TRAVIS_TAG =~ ^v[0-9]+\.[0-9]+\.[0-9]+ ]] && npm run start-production || exit 0)
  