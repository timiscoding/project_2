// groups that a user belongs in
//
// Sample usage:
// bobs_groups = new app.Groups({ user_id: current_user.id })
// bobs_groups.fetch()

var app = app || {};

app.Groups = Backbone.Collection.extend({
  model: app.Group,
  initialize: function(models, args) {
    this.url = '/users/' + args.user_id + '/groups'
  }
});