import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('album-list', 'Integration | Component | album list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{album-list}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#album-list}}
      Ska Blues Fusion
    {{/album-list}}
  `);

  assert.equal(this.$().text().trim(), 'Ska Blues Fusion');
});
