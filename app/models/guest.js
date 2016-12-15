import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  added_by: DS.attr('string'),
  party_id: DS.attr('string'),
  male: DS.attr('boolean'),
  status: DS.attr('number'),
  checked_in: DS.attr('string')
});
