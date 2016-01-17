// a specific group of members
//
// Sample usage:
// bobs_group = new app.Group({ group_id: <group id that bob belongs in> })

var app = app || {};

app.Group = Backbone.Model.extend({
  initialize: function(models, args){
    this.urlRoot = '/groups/' + args.group_id;
    this.members = new app.Members();
    this.members.url = '/groups/' + args.group_id + '/members';
  }
});