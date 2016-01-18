// groups that a user belongs in
//
// Sample usage:
// bobs_groups = new app.Groups(null, { user_id: current_user.id })

var app = app || {};

app.Groups = Backbone.Collection.extend({
  model: app.Group,

  url: '/groups'
});