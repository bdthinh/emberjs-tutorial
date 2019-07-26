import DS from 'ember-data';

const rental = DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr(),
});

export default rental;
