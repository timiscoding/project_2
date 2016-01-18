var app = app || {};

app.TaskView = Backbone.View.extend({
  el: '#main',
  render: function(){

    var taskViewTemplater = _.template( $('#taskView').html());
    this.$el.html( taskViewTemplater( this.model.toJSON() ));

    //var taskTitle = Activity.model.get('title');
    //$('#main').append("<p>Task Title: " + taskTitle + "</p>");

    var taskId = this.model.get('id');
    $('#main').append("<p>Task ID: " + taskId + "</p>");

    var taskDueDate = this.model.get('due_date');
    $('#main').append("<p>Due date: " + taskDueDate + "</p>");
    
    }
});




