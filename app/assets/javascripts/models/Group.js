// a group is a collection of members

var app = app || {};

app.Group = Backbone.Model.extend({
  urlRoot: '/groups',

  initialize: function(){
    this.members = new app.Members();
    this.members.url = '/groups/' + this.id + '/members';
  }
});