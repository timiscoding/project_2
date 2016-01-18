// get a specific group of members or do normal group crud
//
// To get specific group data:
// bobs_group = new app.Group(null, { group_id: <group id that bob belongs in> })

var app = app || {};

app.Group = Backbone.Model.extend({
  initialize: function(models, args){
    if ( args && args.group_id ) {
      this.urlRoot = '/groups/' + args.group_id;  // for fetching group and user json data
    } else {
      this.urlRoot = '/groups'; // for normal group crud
    }
  }
});