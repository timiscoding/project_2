var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app',
    'tasks/:id':　'viewTask',
    'newgroup': 'newGroup',
  },

  app: function(){
    // var appView = new app.AppView({});
    // appView.render();
    // if ( $('#main').length === 0 ) { return; }
    // app.tasks = new app.Tasks();
    // app.tasks.fetch().done(function () {
    //   var appView = new app.AppView({collection: app.tasks});
    //   appView.render();

    // });

        // ** note: to be put in own route later **
    // Fetch the activity list, when done...

    app.activities.fetch().done(function () {
      // Initialize new ActivityPageView and pass in the new collection
      var activityPageView = new app.ActivityPageView({collection: app.activities });
      activityPageView.render();
    });


    var UserDetailsPageView = new app.UserDetailsPageView({ });
    UserDetailsPageView.render();

    var EditUserDetailsPageView = new app.EditUserDetailsPageView({ });
    EditUserDetailsPageView.render();


    // get member list from server and show member list view
    app.memberList.fetch().done(function () {
      console.log('memberlist', app.memberList);
      var memberPageView = new app.MemberPageView({ model: app.memberList });
      memberPageView.render();
    });

    // get current_users groups
    app.current_user.groups.fetch().done(function() {
      console.log('current_users groups', app.current_user.groups);
    });

  },

  viewTask: function(id){
    var task = app.tasks.get(id);
    var taskView = new app.TaskView({model: task});
    taskView.render();
  },

  newGroup: function() {
    console.log('new group');
    var newGroupPageView = new app.NewGroupPageView();
    newGroupPageView.render();
    // app.memberList = new app.Group(null, { group_id: app.current_user.group.id });
  }

});


