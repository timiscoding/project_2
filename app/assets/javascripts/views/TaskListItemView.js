var app = app ||{};

app.TaskListItemView = Backbone.View.extend({
  tagName: 'ul', //Create a new element for each instance of this view.
  events: {
    'click': 'showTask'
  },
  showTask: function(){
    app.router.navigate('tasks/' + this.model.get('id'), true);
  },
  render: function(){
    //ask Jack!!!
    // var activityTitle = this.model.get('title');

    var activityID = this.model.get("activity_id");
    var activity = app.activities.get( this.model.get("activity_id") );
    this.$el.append("<p>Title: " + activity.get("title") + "</p>");
    //this.$el.appendTo('.task-title > h2');

    this.$el.append("<p>Score: " + activity.get("effort") + "</p>");

    // var taskId = this.model.get('id');
    // this.$el.append("<p>Task ID: " + taskId + "</p>");

    var taskDueDate = this.model.get('due_date');
    this.$el.append("<p>DUE: " + taskDueDate + "</p>");

    this.$el.appendTo('#tasks');

  }
});

