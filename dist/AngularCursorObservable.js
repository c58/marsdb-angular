'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCursor = createCursor;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = typeof window !== 'undefined' && window.Mars ? window.Mars.Collection : require('marsdb').Collection;

/**
 * Function that creates a cursor class based on current default
 * cursor class in a collection
 * @return {Cursor}
 */
function createCursor() {
  var _defaultCursor = Collection.defaultCursor();

  var AngularCursorObservable = function (_defaultCursor2) {
    _inherits(AngularCursorObservable, _defaultCursor2);

    function AngularCursorObservable() {
      _classCallCheck(this, AngularCursorObservable);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(AngularCursorObservable).apply(this, arguments));
    }

    _createClass(AngularCursorObservable, [{
      key: 'destroy',

      /**
       * Stop observing given cursor, if passed and
       * observing.
       * It might be useful when you need to replace
       * previously created request with another one
       * (with different query, for example).
       * @param  {CursorObservable} cursor
       */
      value: function destroy(cursor) {
        console.warn('DEPRECATED: `destroy` of cursor is deprecated! use `stopObservers` instead');
        return this.stopObservers();
      }

      /**
       * Original `observe` with one additional argument.
       * Second argument, if passed, a $scope for tracking
       * $destroy event and stopping observing when event
       * emited.
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

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.options._$q.resolve((_get2 = _get(Object.getPrototypeOf(AngularCursorObservable.prototype), '_doUpdate', this)).call.apply(_get2, [this].concat(args)));
      }
    }, {
      key: 'then',
      value: function then() {
        var _get3;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.options._$q.resolve((_get3 = _get(Object.getPrototypeOf(AngularCursorObservable.prototype), 'then', this)).call.apply(_get3, [this].concat(args)));
      }
    }]);

    return AngularCursorObservable;
  }(_defaultCursor);

  return AngularCursorObservable;
}