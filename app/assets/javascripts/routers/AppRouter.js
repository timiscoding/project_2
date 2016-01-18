var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app',
    'tasks/:id':　'viewTask'
  },

  app: function(){
    
    // var appView = new app.AppView({});
    // appView.render();
    app.tasks = new app.Tasks();
    app.tasks.fetch().done(function () {
      var appView = new app.AppView({collection: app.tasks});
      appView.render();
    });
  },

  viewTask: function(id){
    var task = app.tasks.get(id);
    var taskView = new app.TaskView({model: task});
    taskView.render(); 

    if ( $('#main').length === 0 ) { return; }
    var appView = new app.AppView({});
    appView.render();
  }

}); 

