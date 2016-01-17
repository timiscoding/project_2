var app = app || {};

app.Group = Backbone.Model.extend({
  urlRoot: '/groups',

  // function(){
  //   debugger
  //   if ( this.isNew() ) {
  //     return '/groups';
  //   } else {
  //     return '/groups/' + this.id;
  //   }
  // },

  initialize: function(){
    this.members = new app.Members();
    this.members.url = '/groups/' + this.id + '/members';
  }
});