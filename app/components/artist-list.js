import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedArtists: Ember.computed.sort('model', 'sortDefinition'),
  sortBy: 'name',
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function() {
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  }),
});
