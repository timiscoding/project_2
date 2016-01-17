var app = app || {};

app.Groups = Backbone.Collection.extend({
  model: app.Group,
  initialize: function(models, args) {
    this.url = '/users/' + args.user_id + '/groups'
  }
});