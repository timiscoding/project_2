var app = app ||{};

app.TaskListView = Backbone.View.extend({
  tagName: 'li', //Create a new element for each instance of this view.
  events: {
    'click': 'showTask'
  },
  showTask: function(){
    app.router.navigate('tasks/' + this.model.get('id'), true);
  },
  render: function(){
    //ask Jack!!!
    // var taskTitle = activity.model.get('title');
    // $('#tasks').append("<p>Task: " + taskTitle + "</p>");

    var taskId = this.model.get('id');
    $('#tasks').append("<p>Task ID: " + taskId + "</p>");

    var taskDueDate = this.model.get('due_date');
    $('#tasks').append("<p>DUE: " + taskDueDate + "</p>");

    // this.$el.text( "DUE: " + this.model.get('due_date'));
    // this.$el.appendTo('#tasks');

  }
});
