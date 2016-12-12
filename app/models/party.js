import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  when: DS.attr('date'),
  male_guests: DS.hasMany('party-guest'),
  female_guests: DS.hasMany('party-guest'),
  type: DS.attr('number')
});
