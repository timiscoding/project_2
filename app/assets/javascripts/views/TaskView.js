var app = app || {};

app.TaskView = Backbone.View.extend({
  el: '#taskListViewContainer',
  render: function(){

    var taskViewTemplater = _.template( $('#taskView').html());
    
    this.$el.html( taskViewTemplater( this.model.toJSON() ));

    //var taskTitle = Activity.model.get('title');
    //$('#main').append("<p>Task Title: " + taskTitle + "</p>");
    
    }
});




