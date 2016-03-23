import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number'),
  artistId: DS.attr('number'),
  totalSold: DS.attr('number'),
  commentIds: DS.hasMany('comment', {
    async: true
  })
});
