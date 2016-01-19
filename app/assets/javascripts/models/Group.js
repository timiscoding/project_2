// a specific group of members
//
// Sample usage:
// bobs_group = new app.Group(null, { group_id: <group id that bob belongs in> })

var app = app || {};

app.Group = Backbone.Model.extend({

  initialize: function(models, args){
    this.url = '/groups/' + args.group_id;
  }
});