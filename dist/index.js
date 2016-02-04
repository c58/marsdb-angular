'use strict';

var _AngularCollectionDelegate = require('./AngularCollectionDelegate');

var _AngularCursorObservable = require('./AngularCursorObservable');

var angular = typeof window !== 'undefined' && window.angular ? window.angular : require('angular');
var Collection = typeof window !== 'undefined' && window.Mars ? window.Mars.Collection : require('marsdb').Collection;

// Setup mars $collection provider
angular.module('MarsDB', []).provider('$collection', function () {
  Collection.defaultDelegate((0, _AngularCollectionDelegate.createCollectionDelegate)());
  Collection.defaultCursor((0, _AngularCursorObservable.createCursor)());

  this.defaultDelegate = function (delegate) {
    Collection.defaultDelegate(delegate);
    return this;
  };

  this.defaultStorageManager = function (storageManager) {
    Collection.defaultStorageManager(storageManager);
    return this;
  };

  this.defaultIdGenerator = function (idGenerator) {
    Collection.defaultIdGenerator(idGenerator);
    return this;
  };

  var collections = {};
  this.$get = ['$q', function ($q) {
    return function (name) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      // For using within delegate
      options._$q = $q;

      // Use cache or create new Colleciton
      if (collections[name] && !options.noCache) {
        return collections[name];
      } else {
        var newInstance = new Collection(name, options);
        if (!options.noCache) {
          collections[name] = newInstance;
        }
        return newInstance;
      }
    };
  }];
});

module.export = 'MarsDB';