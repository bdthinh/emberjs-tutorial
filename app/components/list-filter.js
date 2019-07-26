import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init(...args) {
    this._super(args);
    this.filter('')
      .then(({ results }) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      const { value: filterInputValue, filter: filterAction } = this;
      filterAction(filterInputValue)
        .then(({ query, results }) => {
          if (query === this.value) {
            this.set('results', results);
          }
        });
    },
  },
});
