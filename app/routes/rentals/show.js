import Route from '@ember/routing/route';

export default Route.extend({
  model({ rental_id: rentalId }) {
    return this
      .get('store')
      .findRecord('rental', rentalId);
  },
});
