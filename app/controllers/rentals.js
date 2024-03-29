import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store.query('rental', { city: param })
          .then(results => ({
            query: param,
            results,
          }));
      }
      return this.store.findAll('rental')
        .then(results => ({
          query: param,
          results,
        }));
    },
  },
});
