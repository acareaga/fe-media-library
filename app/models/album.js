import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.belongsTo('artist', {
    async: true
  }),
  year: DS.attr('number'),
  totalSold: DS.attr('number'),
  comments: DS.hasMany('comment', {
    async: true
  })
});
