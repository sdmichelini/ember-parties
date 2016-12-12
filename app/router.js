import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('parties');
  this.route('party-detail',{ path: 'parties/:id'});
  this.route('login');
});

export default Router;
