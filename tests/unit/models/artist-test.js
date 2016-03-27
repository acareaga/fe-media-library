import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('artist', 'Unit | Model | artist', {
  needs: ['model:albums']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('should have a name', function(assert) {
  const Artist = this.store().modelFor('artist');
  const relationship = Ember.get(Artist, 'relationshipsByName').get('name');

  assert.equal(relationship.key, 'name', 'has relationship with name');
});

test('should have a album', function(assert) {
  const Artist = this.store().modelFor('artist');
  const relationship = Ember.get(Artist, 'relationshipsByName').get('albums');

  assert.equal(relationship.key, 'albums', 'has relationship with albums');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
