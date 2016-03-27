import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artist', { path: '/artist/:artist_id' });
  this.route('album', { path: '/album/:album_id' });
  this.route('comment', { path: '/comment/:comment_id' });
});

export default Router;
