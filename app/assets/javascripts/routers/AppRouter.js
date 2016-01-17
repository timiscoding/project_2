var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app'
  },

  app: function () {
    var appView = new app.AppView({ });
    appView.render();

    // ** note: to be put in own route later **
    // Fetch the activity list, when done...
    app.getActivityList.fetch().done(function () {
      // Initialize new ActivityPageView and pass in the new collection
      var activityPageView = new app.ActivityPageView({collection: app.getActivityList });
      activityPageView.render();
    });

  }

});