var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': '',
    'tasklist': 'taskList',
    'tasks/:id':　'viewTask',
    'mydetails': 'myDetails',
    'activities': 'activities',
    'leaderboard': 'leaderboard'
  },

  taskList: function () {
    var taskListPageView = new app.TaskListPageView({});
    taskListPageView.render(); 

     app.memberList.fetch().done(function () {
      console.log('memberlist', app.memberList);
      var memberPageView = new app.MemberPageView({ model: app.memberList });
      memberPageView.render();
      
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

  leaderboard: function () {
    app.memberList.fetch().done(function () {
      var LeaderboardPageView = new app.LeaderboardPageView({});
      LeaderboardPageView.render();
    })
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


