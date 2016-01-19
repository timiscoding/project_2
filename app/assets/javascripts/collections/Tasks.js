var app = app || {};

app.Tasks = Backbone.Collection.extend({
  model: app.Task,
  url: '/tasks', //data source url
  initialize: function(){
    //This is where my event handler will be added.
    this.on("add", function(task){
      //create a new SecretView and give it some information to represent.
      var taskView = new app.TaskView({ model: task });
      //call render on it
      taskView.render();
    });
  }
});