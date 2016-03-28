import { moduleForModel, test } from 'ember-qunit';
// import Ember from 'ember';

moduleForModel('album', 'Unit | Model | album', {
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
