var app = app || {};

app.NewGroupPageView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #addGroup': 'addGroup',
    'click #joinGroup': 'joinGroup',
  },

  render: function() {
    this.$el.html( $('#newGroupPageViewTemplate').html() );
    app.groups.fetch().done(function() { // fetch all groups to allow a user to join a group
      app.groups.forEach(function(group){
        var newGroupListItemView = new app.NewGroupListItemView({ model: group });
        this.$('#joinGroupName').append( newGroupListItemView.render().el );
      });
    });
  },

  addGroup: function() {
    var user_ids = [ app.current_user.id ]; // the users that will belong in this new group
    // create a new group in backbone and rails with group name and user data
    app.groups.create({ group: { name: $('#groupName').val(), users: user_ids } });
    app.router.navigate('', true);
    $('#main').empty();
  },

  joinGroup: function() {
    var group_id = $('#joinGroupName').val();
    var url = '/groups/' + group_id + '/add/' + app.current_user.id;
    $.ajax(url, {
      dataType: 'json',
      method: 'put'
    }).done(function( data ){
      app.router.navigate('', true);
      $('#main').empty();
    })
  }
});