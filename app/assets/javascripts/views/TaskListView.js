var app = app ||{};

app.TaskListView = Backbone.View.extend({
  el: '#main',
  //tagName: 'ul', //Create a new element for each instance of this view.
  events: {
    'click': 'showTask'
  },
  showTask: function(){
    app.router.navigate('tasks/' + this.model.get('id'), true);
  },
  render: function(){
    var taskListViewTemplater = _.template( $('#taskListView').html());
    this.$el.html( taskListViewTemplater( this.model.toJSON() ));


    // var activityID = this.model.get("activity_id");
    // var activity = app.activities.get( this.model.get("activity_id") );
    // this.$el.append("<p>Title: " + activity.get("title") + "</p>");
    // this.$el.append("<p>Score: " + activity.get("effort") + "</p>");

    // var taskDueDate = this.model.get('due_date');
    // this.$el.append("<p>DUE: " + taskDueDate + "</p>");

    // this.$el.appendTo('#tasks');

  }
});

