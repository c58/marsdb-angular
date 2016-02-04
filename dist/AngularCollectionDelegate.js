'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCollectionDelegate = createCollectionDelegate;

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

  var AngularCollectionDelegate = function (_defaultDelegate2) {
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

        return _get(Object.getPrototypeOf(AngularCollectionDelegate.prototype), 'find', this).call(this, query, _extends({}, options, { _$q: this.$q }));
      }
    }]);

    return AngularCollectionDelegate;
  }(_defaultDelegate);

  return AngularCollectionDelegate;
}