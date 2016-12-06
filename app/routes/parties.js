import Ember from 'ember';

let parties = [
  {
    id: '1',
    name: 'Highlighter',
    type: 0,
    when: new Date("October 13, 2014 11:13:00")
  },
  {
    id: '2',
    name: 'Toga',
    type: 0,
    when: new Date("October 13, 2017 11:13:00")
  },
  {
    id: '3',
    name: 'Social',
    type: 1,
    when: new Date("October 11, 2017 11:13:00")
  }
];

export default Ember.Route.extend({
  model() {
    return parties;
  }
});
