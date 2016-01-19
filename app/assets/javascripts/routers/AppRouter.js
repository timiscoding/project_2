var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': '',
    'tasklist': 'taskList',
    'tasks/:id':　'viewTask',
    'addtask/:id':　'addTask',
    'mydetails': 'myDetails',
    'activities': 'activities',
    'activities/edit': 'editActivities',
    'leaderboard': 'leaderboard',
    'activity/new': 'newActivity'

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

  addTask: function(id){
    //debugger;
    var activity = app.activities.get( id );
    if (! activity) {
      activity = new app.Activity({id: id});
      activity.fetch({
        success: function () {
          var addTaskPageView = new app.AddTaskPageView({ model: activity });
          addTaskPageView.render();           
        }
      });
      return;
    }
    var addTaskPageView = new app.AddTaskPageView({ model: activity });
    addTaskPageView.render(); 
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
      var activityPageView = new app.ActivityPageView({ collection: app.activities });
      activityPageView.render();
    });
  },

  addtask: function () {
    var addTaskView = new app.AddTaskView({});
    addTaskView.render();

  },
  editActivities: function () {
    var activityEditPageView = new app.ActivityEditPageView({ collection: app.activities });
    activityEditPageView.render();

  },
  newActivity: function () {
    var AddActivityPageView = new app.AddActivityPageView({});
    AddActivityPageView.render();
  }

});


