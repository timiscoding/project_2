var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app',
    'tasks/:id':　'viewTask',
    'mydetails': 'myDetails'
  },

  app: function(){
    
    // var appView = new app.AppView({});
    // appView.render();
    // if ( $('#main').length === 0 ) { return; }
    // app.tasks = new app.Tasks();
    // app.tasks.fetch().done(function () {
    //   var appView = new app.AppView({collection: app.tasks});
    //   appView.render();

    // });

        // ** note: to be put in own route later **
    // Fetch the activity list, when done...
    app.activities.fetch().done(function () {
      // Initialize new ActivityPageView and pass in the new collection
      var activityPageView = new app.ActivityPageView({collection: app.activities });
      activityPageView.render();

      var activityEditPageView = new app.ActivityEditPageView({collection: app.activities });
      activityEditPageView.render();
    });
     


  },

  viewTask: function(id){
    var task = app.tasks.get(id);
    var taskView = new app.TaskView({model: task});
    taskView.render(); 
  },

  myDetails: function () {
      var UserDetailsPageView = new app.UserDetailsPageView({ });
      UserDetailsPageView.render();
      console.log("sunning")
      var EditUserDetailsPageView = new app.EditUserDetailsPageView({ });
      EditUserDetailsPageView.render();
  }

}); 


