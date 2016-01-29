(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCollectionDelegate = createCollectionDelegate;

var _AngularCursorObservable = require('./AngularCursorObservable');

var _AngularCursorObservable2 = _interopRequireDefault(_AngularCursorObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = typeof window !== 'undefined' && window.Mars ? window.Mars.Collection : require('marsdb').Collection;

function createCollectionDelegate() {
  // Build new delegate upon current default
  var _defaultDelegate = Collection.defaultDelegate();

  /**
   * CollectionDelegate that just wraps methods with $q
   * promises and uses special AngularCursorObservable
   * for finds.
   */

  var AngularCollectionDelegate = (function (_defaultDelegate2) {
    _inherits(AngularCollectionDelegate, _defaultDelegate2);

    function AngularCollectionDelegate(db, options) {
      _classCallCheck(this, AngularCollectionDelegate);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AngularCollectionDelegate).call(this, db, options));

      _this.db = db;
      _this.$q = options._$q;
      return _this;
    }

    _createClass(AngularCollectionDelegate, [{
      key: 'insert',
      value: function insert() {
        var _get2;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.$q.resolve((_get2 = _get(Object.getPrototypeOf(AngularCollectionDelegate.prototype), 'insert', this)).call.apply(_get2, [this].concat(args)));
      }
    }, {
      key: 'remove',
      value: function remove() {
        var _get3;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.$q.resolve((_get3 = _get(Object.getPrototypeOf(AngularCollectionDelegate.prototype), 'remove', this)).call.apply(_get3, [this].concat(args)));
      }
    }, {
      key: 'update',
      value: function update() {
        var _get4;

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this.$q.resolve((_get4 = _get(Object.getPrototypeOf(AngularCollectionDelegate.prototype), 'update', this)).call.apply(_get4, [this].concat(args)));
      }
    }, {
      key: 'find',
      value: function find(query) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new _AngularCursorObservable2.default(this.$q, this.db, query, options);
      }
    }]);

    return AngularCollectionDelegate;
  })(_defaultDelegate);

  return AngularCollectionDelegate;
}
},{"./AngularCursorObservable":2,"marsdb":undefined}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CursorObservable = typeof window !== 'undefined' && window.Mars ? window.Mars.CursorObservable : require('marsdb').CursorObservable;

var AngularCursorObservable = exports.AngularCursorObservable = (function (_CursorObservable) {
  _inherits(AngularCursorObservable, _CursorObservable);

  function AngularCursorObservable($q) {
    var _Object$getPrototypeO;

    _classCallCheck(this, AngularCursorObservable);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AngularCursorObservable)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.$q = $q;
    return _this;
  }

  /**
   * Stop observing given cursor, if passed and
   * observing.
   * It might be useful when you need to replace
   * previously created request with another one
   * (with different query, for example).
   *
   * @param  {CursorObservable} cursor
   */

  _createClass(AngularCursorObservable, [{
    key: 'destroy',
    value: function destroy(cursor) {
      console.warn('DEPRECATED: `destroy` of cursor is deprecated! use `stopObservers` instead');
      return this.stopObservers();
    }

    /**
     * Original `observe` with one additional argument.
     * Second argument, if passed, a $scope for tracking
     * $destroy event and stopping observing when event
     * emited.
     *
     * @param  {Function} fn
     * @param  {Scope}   $scope
     * @return {Stooper}
     */

  }, {
    key: 'observe',
    value: function observe(fn, $scope) {
      var stopper = _get(Object.getPrototypeOf(AngularCursorObservable.prototype), 'observe', this).call(this, fn);
      if ($scope) {
        $scope.$on('$destroy', function () {
          stopper.stop();
        });
      }
      return stopper;
    }
  }, {
    key: '_doUpdate',
    value: function _doUpdate() {
      var _get2;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.$q.resolve((_get2 = _get(Object.getPrototypeOf(AngularCursorObservable.prototype), '_doUpdate', this)).call.apply(_get2, [this].concat(args)));
    }
  }, {
    key: 'then',
    value: function then() {
      var _get3;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.$q.resolve((_get3 = _get(Object.getPrototypeOf(AngularCursorObservable.prototype), 'then', this)).call.apply(_get3, [this].concat(args)));
    }
  }]);

  return AngularCursorObservable;
})(CursorObservable);

exports.default = AngularCursorObservable;
},{"marsdb":undefined}],3:[function(require,module,exports){
'use strict';

var _AngularCollectionDelegate = require('./AngularCollectionDelegate');

var angular = typeof window !== 'undefined' && window.angular ? window.angular : require('angular');
var Collection = typeof window !== 'undefined' && window.Mars ? window.Mars.Collection : require('marsdb').Collection;

// Setup mars $collection provider
angular.module('MarsDB', []).provider('$collection', function () {
  var _angularCollectionDelegate = (0, _AngularCollectionDelegate.createCollectionDelegate)();
  Collection.defaultDelegate(_angularCollectionDelegate);

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
},{"./AngularCollectionDelegate":1,"angular":undefined,"marsdb":undefined}],4:[function(require,module,exports){
module.exports = require('./dist/index');

},{"./dist/index":3}]},{},[4]);
