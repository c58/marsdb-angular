MarsDB-Angular
=========

[![Build Status](https://travis-ci.org/c58/marsdb-angular.svg?branch=master)](https://travis-ci.org/c58/marsdb-angular)
[![npm version](https://badge.fury.io/js/marsdb-angular.svg)](https://www.npmjs.com/package/marsdb-angular)
[![Coverage Status](https://coveralls.io/repos/c58/marsdb-angular/badge.svg?branch=master&service=github)](https://coveralls.io/github/c58/marsdb-angular?branch=master)
[![Dependency Status](https://david-dm.org/c58/marsdb-angular.svg)](https://david-dm.org/c58/marsdb-angular)

MarsDB-Angular is an AngularJS 1.x binding for MarsDB. It makes easy to use MarsDB in an angular application by automatically wrap all returned promises with `$q` and destroy observers on $scope's `$destroy` event.

## Examples
Include `marsdb.angular.js` after `marsdb.min.js` and `angular.js` in your `<head>`. Then add a `MarsDB` dependency in your module. That's it. Now you can use `$collection` factory. For example:
```javascript
angular.module(‘app’, [‘MarsDB’])
	.controller(function($scope, $collection) {
    // Each call for a `$collection(...)` automatically
    // creates new collection if it is not exists
		const posts = $collection(‘posts’);

		// All methods in $collection returns a $q promise
		// So you don’t need to manually call $digest
		posts.find({authorId: 123}).observe((docs) => {
			$scope.posts = docs;
		}, $scope).then(() => {
			$scope.loaded = true;
		});

		// $scope at last argument needed for auto-binding
		// to a “$destroy” event of the scope for stop
		// observing changes. You can call it manually and
		// don’t pass last argument.
	});
```

You also can use MarsDB within browserify environment. Just `require(‘marsdb/dist/angular’)` and MarsDB module will be added to the angular. Angular must be defined in a `window` or must be available as a module `require(‘angular’)`.

## Contributing
I’m waiting for your pull requests and issues.
Don’t forget to execute `gulp lint` before requesting. Accepted only requests without errors.

## License
See [License](LICENSE)