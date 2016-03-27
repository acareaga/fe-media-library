import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  message: DS.attr('string'),
  album: DS.belongsTo('album', {
    async: true
  })
});
