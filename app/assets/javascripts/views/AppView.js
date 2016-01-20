var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .all-tasks': 'groupTasks',
    'click .my-tasks': 'myTasks'
  },
  render: function () {
    this.groupTasks();
  },

  groupTasks: function(){
    //Set up the overall page structure
    var appViewHTML = $('#appView').html();
    this.$el.html( appViewHTML );

    var currentUsersGroupId = app.current_user.group.id
    //console.log(currentUsersGroupId); //3
    var currentUsersTasks = this.collection.select(function (model) {

      var activityID = model.get("activity_id");
      //console.log( activityID );//9,10,11,12,13,14,15,16 all the  activities
      var activity = app.activities.get( model.get("activity_id") );

      if (activity.get("group_id") === app.current_user.group.id) {
        var taskListView = new app.TaskListView({model: model});
        taskListView.render();
        return true;
      } else {
        return false;
      }
    });

  },

  myTasks: function () {
    //Set up the overall page structure
    var appViewHTML = $('#appView').html();
    this.$el.html( appViewHTML );

    var currentUsersGroupId = app.current_user.group.id
    var currentUsersTasks = this.collection.select(function (model) {

      var activityID = model.get("activity_id");
      //console.log( activityID );//9,10,11,12,13,14,15,16 all the  activities
      var activity = app.activities.get( model.get("activity_id") );

      if (activity.get("user_id") === app.current_user.id) {
        var taskListView = new app.TaskListView({model: model});
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



