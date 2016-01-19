var app = app || {};

app.Groups = Backbone.Collection.extend({
  model: app.Group,

  url: '/groups'
});