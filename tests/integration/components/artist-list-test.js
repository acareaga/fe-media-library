import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artist-list', 'Integration | Component | artist list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{artist-list}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#artist-list}}
      New Age Thing
    {{/artist-list}}
  `);

  assert.equal(this.$().text().trim(), 'New Age Thing');
});
