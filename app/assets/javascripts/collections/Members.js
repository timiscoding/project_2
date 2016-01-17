// a member is a user that belongs to a group

var app = app || {};

app.Members = Backbone.Collection.extend({
  model: app.Member
});