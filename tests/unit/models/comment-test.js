import { moduleForModel, test } from 'ember-qunit';
// import Ember from 'ember';

moduleForModel('comment', 'Unit | Model | comment', {
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
