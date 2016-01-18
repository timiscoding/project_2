var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app',
    'tasklist': 'tasklist',
    'tasks/:id':　'viewTask',
    'mydetails': 'myDetails',
    'activities': 'activities'
  },

  app: function(){
    
    // var appView = new app.AppView({});
    // appView.render();
    if ( $('#main').length === 0 ) { return; }
    app.tasks = new app.Tasks();

    // ** note: to be put in own route later **
    // Fetch the activity list, when done...
    app.activities.fetch({replace: true, reset: true}).done(function () {
      console.log( app.activities );
      // Initialize new ActivityPageView and pass in the new collection
      var activityPageView = new app.ActivityPageView({ collection: app.activities });
      activityPageView.render();

      app.tasks.fetch().done(function () {
        var appView = new app.AppView({collection: app.tasks});
      appView.render();
    　});

    });
    // get member list from server and show member list view
    app.memberList.fetch().done(function () {
      console.log('memberlist', app.memberList);
      var memberPageView = new app.MemberPageView({ model: app.memberList });
      memberPageView.render();
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
  },

  activities: function () {
    app.activities.fetch().done(function () {
      // Initialize new ActivityPageView and pass in the new collection
      var activityPageView = new app.ActivityPageView({collection: app.activities });
      activityPageView.render();

      var activityEditPageView = new app.ActivityEditPageView({collection: app.activities });
      activityEditPageView.render();
    });
  },

  taskList: function () {
    // var appView = new app.AppView({});
    // appView.render();

    app.tasks = new app.Tasks();
    app.tasks.fetch().done(function () {
      var appView = new app.AppView({collection: app.tasks});
       appView.render();
    });
  }

});


