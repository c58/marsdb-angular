import { createCollectionDelegate } from './AngularCollectionDelegate';
import { createCursor } from './AngularCursorObservable';
const angular = typeof window !== 'undefined' && window.angular
  ? window.angular : require('angular');
const Collection = typeof window !== 'undefined' && window.Mars
  ? window.Mars.Collection : require('marsdb').Collection;


// Setup mars $collection provider
angular.module('MarsDB', [])
.provider('$collection', function() {
  Collection.defaultDelegate(createCollectionDelegate());
  Collection.defaultCursor(createCursor());

  this.defaultDelegate = function(delegate) {
    Collection.defaultDelegate(delegate);
    return this;
  };

  this.defaultStorageManager = function(storageManager) {
    Collection.defaultStorageManager(storageManager);
    return this;
  };

  this.defaultIdGenerator = function(idGenerator) {
    Collection.defaultIdGenerator(idGenerator);
    return this;
  };

  const collections = {};
  this.$get = ['$q', function($q) {
    return function(name, options = {}) {
      // For using within delegate
      options._$q = $q;

      // Use cache or create new Colleciton
      if (collections[name] && !options.noCache) {
        return collections[name];
      } else {
        const newInstance = new Collection(name, options);
        if (!options.noCache) {
          collections[name] = newInstance;
        }
        return newInstance;
      }
    };
  }];

});

module.export = 'MarsDB';
