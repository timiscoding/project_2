var app = app || {};

app.TaskListView = Backbone.View.extend({
  el: '#taskListViewContainer',
  events: {
    'click .all-tasks': 'groupTasks',
    'click .my-tasks': 'myTasks'
  },

  render: function () {
    this.groupTasks();
  },

  groupTasks: function(){
    //Set up the overall page structure
    var appViewHTML = $('#taskListViewTemplate').html();
    this.$el.html( appViewHTML );

    var currentUsersGroupId = app.current_user.group.id
    console.log( "Group ID: " + currentUsersGroupId); //3
    // this is going through checking each tasks and grab appropriate tasks.

    var sortedTasks = this.collection.sortBy("due_date");
    var currentUsersTasks = _.each(sortedTasks, function (model) {

      var activityID = model.get("activity_id");
      //console.log( activityID );//9,10,11,12,13,14,15,16 all the  activities
      var activity = app.activities.get( model.get("activity_id") );

      if (activity.get("group_id") === app.current_user.group.id 
        && model.get("done") === false ) {
        var taskListView = new app.TaskListItemView({model: model});
        taskListView.render();
      }
    });

  },

  myTasks: function () {
    //Set up the overall page structure
    var appViewHTML = $('#taskListViewTemplate').html();
    this.$el.html( appViewHTML );

    var currentUsersGroupId = app.current_user.group.id
    var currentUsersTasks = this.collection.select(function (model) {

      // var activityID = model.get("activity_id");
      // //console.log( activityID );//9,10,11,12,13,14,15,16 all the  activities
      // var activity = app.activities.get( model.get("activity_id") );

      // // var taskID = model.get("user_id");
      // //console.log( userID );//9,10,11,12,13,14,15,16 all the  activities
      // var task = app.tasks.get( model.get("user_id") );

      if (model.get("user_id") === app.current_user.id && model.get("done") === false ) {
        var taskListView = new app.TaskListItemView({model: model});
        taskListView.render();
        return true;
      } else {
        return false;
      }

    });
  }
   // // Creates a new view for the form
   //  var taskInputView = new app.TaskInputView();
   //  taskInputView.render(); // then
});




