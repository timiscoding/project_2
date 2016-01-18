var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app',
    'tasks/:id':　'viewTask'
  },

  app: function(){
    
    // var appView = new app.AppView({});
    // appView.render();
    if ( $('#main').length === 0 ) { return; }
    app.tasks = new app.Tasks();
    app.tasks.fetch().done(function () {
      var appView = new app.AppView({collection: app.tasks});
      appView.render();

    });

        // ** note: to be put in own route later **
    // Fetch the activity list, when done...
    app.getActivityList.fetch().done(function () {
      // Initialize new ActivityPageView and pass in the new collection
      var activityPageView = new app.ActivityPageView({collection: app.getActivityList });
      activityPageView.render();
    });

  },

  viewTask: function(id){
    var task = app.tasks.get(id);
    var taskView = new app.TaskView({model: task});
    taskView.render(); 
  }

}); 


