const Collection = typeof window !== 'undefined' && window.Mars
  ? window.Mars.Collection : require('marsdb').Collection;


export function createCollectionDelegate() {
  // Build new delegate upon current default
  const _defaultDelegate = Collection.defaultDelegate();

  /**
   * CollectionDelegate that just wraps methods with $q
   * promises and uses special AngularCursorObservable
   * for finds.
   */
  class AngularCollectionDelegate extends _defaultDelegate {
    constructor(db, options) {
      super(db, options);
      this.db = db;
      this.$q = options._$q;
    }

    insert(...args) {
      return this.$q.resolve(super.insert(...args));
    }

    remove(...args) {
      return this.$q.resolve(super.remove(...args));
    }

    update(...args) {
      return this.$q.resolve(super.update(...args));
    }

    find(query, options = {}) {
      return super.find(query, {...options, _$q: this.$q});
    }
  }

  return AngularCollectionDelegate;
}
