import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comment-list', 'Integration | Component | comment list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{comment-list}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#comment-list}}
      "Good album, but I liked the first one." - Evan Willum
    {{/comment-list}}
  `);

  assert.equal(this.$().text().trim(), '"Good album, but I liked the first one." - Evan Willum');
});
