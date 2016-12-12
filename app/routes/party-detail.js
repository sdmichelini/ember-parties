import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

let party = {
  party: {
    id: '1',
    name: 'Highlighter',
    type: 0,
    when: new Date("October 13, 2014 11:13:00")
  },
  female_guests: [{name:'Test Female', added_by:'Test Brother 1'}],
  male_guests: []
};
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return party;
  }
});
