import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('parties', function(){
    //Dyanmic Route
    this.route('guests',{ path: '/:party_id'});
  });
  this.route('protected');
  this.route('login');
});

export default Router;
