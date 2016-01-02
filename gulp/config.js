'use strict';

module.exports = {
  src: 'lib/**/*',
  dist: 'dist',
  build: 'build',

  browser: {
    bundleName: 'marsdb.angular.js',
    bundleMinName: 'marsdb.angular.min.js',
    entry: 'index.js',
    entryTests: 'browser_tests.js',
  }
};
