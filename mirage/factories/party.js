import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.random.word,
  when: faker.date.recent,
  male_guests: [],
  female_guests: [],
  type: 0
});
