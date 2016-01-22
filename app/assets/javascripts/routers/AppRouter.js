var app = app || {};

Backbone.View.prototype.close = function(){
  this.remove();
  this.unbind();
}

var AppView = function(){

   this.showView = function(view) {
    if (this.currentView){
      this.currentView.close();
    }

    this.currentView = view;
    this.currentView.render();

    $("#main").html(this.currentView.el);
  }

};

app.AppRouter = Backbone.Router.extend({
  initialize: function(){
    app.appView = new AppView();
    app.intervalID = setInterval( this.negmessage, 5000 );

  },

  routes: {
    '': '',
    'tasklist': 'taskList',
    'tasks/:id':　'viewTask',
    // 'feedbacks/:id':　'viewFeedback',
    'addtask/:id':　'addTask',
    'mydetails': 'myDetails',
    'activities': 'activities',
    'activities/edit': 'editActivities',
    'leaderboard': 'leaderboard',
    'activity/new': 'newActivity',
    'newgroup': 'newGroup',
    'groupStats': 'groupStats',
    'negmessage': 'negmessage'
  },

  negmessage: function () {
    app.userFeedbacks.fetch().done(function () {
      var negativeMessageView = new app.NegativeMessageView({});
      // app.appView.showView(negativeMessageView);
      negativeMessageView.render();
    });
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

        var feedbackListView = new app.FeedbackListView({collection: app.feedbacks});
         feedbackListView.render();

      });
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

  // viewFeedback: function(id){
  //   var feedback = app.feedbacks.get(id);
  //   var feedbackView = new app.FeedbackView({model: feedback});
  //   feedbackView.render();
  // },

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
    if (!app.activities.length) {
      app.activities.fetch().done(function () {
          var activityEditPageView = new app.ActivityEditPageView({ collection: app.activities });
          activityEditPageView.render();
      });
      return;
    }
    var activityEditPageView = new app.ActivityEditPageView({ collection: app.activities });
    activityEditPageView.render();
  },

  newActivity: function () {
    var AddActivityPageView = new app.AddActivityPageView({});
    AddActivityPageView.render();
  },

  newGroup: function() {
    console.log('new group');
    var newGroupPageView = new app.NewGroupPageView();
    newGroupPageView.render();
    // app.memberList = new app.Group(null, { group_id: app.current_user.group.id });
  },

  groupStats: function() {
    console.log('stats');
    app.memberList.fetch().done(function () {
      var GroupStatsPageView = new app.GroupStatsPageView();
      GroupStatsPageView.render();

    });
  },

  messages: function() {
    // console.log('show message if i received negative feedback');
    // var feedbacks = new app.UserFeedbacks( null, { user_id: app.current_user.id } );
    // feedbacks.fetch().done(function() {
    //   console.log('feedbacks', feedbacks.toJSON());
    //   var byTask = _.groupBy( feedbacks.toJSON(), function( feedback ){ return feedback.task.id; } );
    //   console.log('byTask', byTask);
    //   _.each( byTask, function(taskFeedbacks){
    //     var badFeedback = _.some(taskFeedbacks, function(feedback){
    //       return feedback.rating === 0;
    //     });
    //     if (badFeedback) {
    //       // send notification
    //       console.log('shit job for', taskFeedbacks[0].task.title);
    //     }
    //   });
    // });
    // console.log(feedbacks);
    var userFeedbacks = new app.UserFeedbacks( null, { user_id: app.current_user.id } );
    app.memberList.fetch().done(function(){
      userFeedbacks.fetch();
    });
  }


});


