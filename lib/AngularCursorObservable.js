const Collection = typeof window !== 'undefined' && window.Mars
  ? window.Mars.Collection : require('marsdb').Collection;


/**
 * Function that creates a cursor class based on current default
 * cursor class in a collection
 * @return {Cursor}
 */
export function createCursor() {
  const _defaultCursor = Collection.defaultCursor();

  class AngularCursorObservable extends _defaultCursor {

    /**
     * Stop observing given cursor, if passed and
     * observing.
     * It might be useful when you need to replace
     * previously created request with another one
     * (with different query, for example).
     * @param  {CursorObservable} cursor
     */
    destroy(cursor) {
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
    observe(fn, $scope) {
      const stopper = super.observe(fn);
      if ($scope) {
        $scope.$on('$destroy', function() {
          stopper.stop();
        });
      }
      return stopper;
    }

    _doUpdate(...args) {
      return this.options._$q.resolve(super._doUpdate(...args));
    }

    then(...args) {
      return this.options._$q.resolve(super.then(...args));
    }
  }

  return AngularCursorObservable;
}
