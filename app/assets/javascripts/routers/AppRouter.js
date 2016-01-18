var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'taskList',
    'tasklist': 'taskList',
    'tasks/:id':　'viewTask',
    'mydetails': 'myDetails',
    'activities': 'activities'
  },

  taskList: function () {
    var taskListPageView = new app.TaskListPageView({});
    taskListPageView.render(); 


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

     //render user details and Edit user views
    var UserDetailsPageView = new app.UserDetailsPageView({});
    UserDetailsPageView.render();

    var EditUserDetailsPageView = new app.EditUserDetailsPageView({});
    EditUserDetailsPageView.render();

    var LeaderboardPageView = new app.LeaderboardPageView({});
   // leaderboard page


    // get member list from server and show member list view

    app.memberList.fetch().done(function () {
      console.log('memberlist', app.memberList);
      var memberPageView = new app.MemberPageView({ model: app.memberList });
      memberPageView.render();
      LeaderboardPageView.render();
    });
    
    app.activities.fetch({replace: true, reset: true}).done(function () {
      app.tasks = new app.Tasks();
      app.tasks.fetch().done(function () {
        var taskListView = new app.TaskListView({collection: app.tasks});
         taskListView.render();
      });
    });
  },

  viewTask: function(id){
    var task = app.tasks.get(id);
    var taskView = new app.TaskView({model: task});
    taskView.render(); 
  },

  myDetails: function () {
      var UserDetailsPageView = new app.UserDetailsPageView({ });
      UserDetailsPageView.render();

      var EditUserDetailsPageView = new app.EditUserDetailsPageView({ });
      EditUserDetailsPageView.render();
  },

  activities: function () {
    app.activities.fetch().done(function () {
      // Initialize new ActivityPageView and pass in the new collection
      var activityPageView = new app.ActivityPageView({collection: app.activities });
      activityPageView.render();

      var activityEditPageView = new app.ActivityEditPageView({collection: app.activities });
      activityEditPageView.render();
    });
  }

});


