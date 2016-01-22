var app = app || {};

app.NewGroupPageView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #addGroup': 'addGroup',
    'click #joinGroup': 'joinGroup',
  },

  render: function() {
    this.$el.html( $('#newGroupPageViewTemplate').html() );
    $('nav a').addClass('hidden');
    app.groups.fetch().done(function() { // fetch all groups to allow a user to join a group
      app.groups.forEach(function(group){
        var newGroupListItemView = new app.NewGroupListItemView({ model: group });
        this.$('#joinGroupName').append( newGroupListItemView.render().el );
      });
    });
  },

  addGroup: function() {
    var groupName = $('#groupName').val();
    var group = new app.Group({ name: groupName });
    group.save().done(function (data) {
      app.groups.add(group);  // add this group to all the groups
      app.current_user.group = app.current_user.group || {};
      app.current_user.group.id = data.id; // set the default group for the current user
      app.current_user.group.name = groupName;

    }).done(function(){
      // add the current user to the newly created group
      var url = '/groups/' + app.current_user.group.id + '/add/' + app.current_user.id;
      $.ajax(url, {
        dataType: 'json',
        method: 'put'
      }).done(function(){
        // create an empty group that will store group name and users data for this group.
        app.memberList = new app.Group(null, { group_id: app.current_user.group.id });
        $('#main').empty();
        $('nav a').removeClass('hidden');
        app.router.navigate('tasklist', true);
      });
    })
  },

  joinGroup: function() {
    var group_id = $('#joinGroupName').val();
    var url = '/groups/' + group_id + '/add/' + app.current_user.id;
    $.ajax(url, {
      dataType: 'json',
      method: 'put'
    }).done(function( data ){
      app.current_user.group = data;
      app.memberList = new app.Group(null, { group_id: app.current_user.group.id });
      $('#main').empty();
      $('nav a').removeClass('hidden');
      app.router.navigate('tasklist', true);
    })
  }
});