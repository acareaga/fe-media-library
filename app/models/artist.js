import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  albumIds: DS.hasMany('album', {
    async: true
  })
});
