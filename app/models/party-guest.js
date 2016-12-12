import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  added_by: DS.attr('string')
});
