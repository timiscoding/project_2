var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function(){
    //Set up the overall page structure
    var appViewHTML = $('#appView').html();
    this.$el.html( appViewHTML );

    // debugger;
    this.collection = this.collection.where({ activity_id: 2 });
    // Create individual views whitn the app for each of the blog posts.
    _(this.collection).each(function(task){

      var taskListView = new app.TaskListView({model: task});
      taskListView.render();
      // var taskViewTemplate = $("#task-template").html();
      // this.$el.append(taskViewTemplate);

      // var userListViewTemplate = "user＿list_view_here";
      // this.$el.append(userListViewTemplate);

      // var appViewTemplate = "anything";
      // this.$el.append(appViewTemplate);
    });
   // Creates a new view for the form
   var taskInputView = new app.TaskInputView();
   taskInputView.render(); // then 
  }
});