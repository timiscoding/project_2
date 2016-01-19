// groups that a user belongs in
//
// Sample usage:
// bobs_groups = new app.Groups(null, { user_id: current_user.id })

var app = app || {};

app.UserGroups = Backbone.Collection.extend({
  model: app.UserGroup,

  initialize: function(models, arg) {
    this.url = '/users/' + arg.user_id + '/groups';
  }
});