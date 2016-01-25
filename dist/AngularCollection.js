'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AngularCollection = undefined;

var _AngularCursorObservable = require('./AngularCursorObservable');

var _AngularCursorObservable2 = _interopRequireDefault(_AngularCursorObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collection = typeof window !== 'undefined' && window.Mars ? window.Mars.Collection : require('marsdb').Collection;

/**
 * Collection that just delegate all methods to an
 * original Collection and wrapps all returned promises
 * with angular's $q.
 *
 * It's not extending an original Collection for
 * safity porpuse. But if you really wants to access
 * storage or indexes, use a '_collcetion' field
 * of the object.
 */

var AngularCollection = exports.AngularCollection = (function () {
  function AngularCollection(name, options, $q) {
    _classCallCheck(this, AngularCollection);

    this.$q = $q;
    this._collection = new Collection(name, options);
  }

  _createClass(AngularCollection, [{
    key: 'insert',
    value: function insert() {
      var _collection;

      return this.$q.resolve((_collection = this._collection).insert.apply(_collection, arguments));
    }
  }, {
    key: 'insertAll',
    value: function insertAll() {
      var _collection2;

      return this.$q.resolve((_collection2 = this._collection).insertAll.apply(_collection2, arguments));
    }
  }, {
    key: 'update',
    value: function update() {
      var _collection3;

      return this.$q.resolve((_collection3 = this._collection).update.apply(_collection3, arguments));
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _collection4;

      return this.$q.resolve((_collection4 = this._collection).remove.apply(_collection4, arguments));
    }
  }, {
    key: 'find',
    value: function find(query) {
      return new _AngularCursorObservable2.default(this, query);
    }
  }, {
    key: 'findOne',
    value: function findOne() {
      var _collection5;

      return this.$q.resolve((_collection5 = this._collection).findOne.apply(_collection5, arguments));
    }
  }, {
    key: 'count',
    value: function count() {
      var _collection6;

      return this.$q.resolve((_collection6 = this._collection).count.apply(_collection6, arguments));
    }
  }, {
    key: 'ids',
    value: function ids() {
      var _collection7;

      return this.$q.resolve((_collection7 = this._collection).ids.apply(_collection7, arguments));
    }
  }, {
    key: 'modelName',
    get: function get() {
      return this._collection.modelName;
    }
  }]);

  return AngularCollection;
})();

exports.default = AngularCollection;