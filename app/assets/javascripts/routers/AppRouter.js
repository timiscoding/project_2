var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app'
  },

  app: function () {
    var appView = new app.AppView({ });
    appView.render();

    // to be put in own route later
    app.getActivityList.fetch().done(function () {
      var activitiesList = new app.ActivityView({collection: app.getActivityList });
      activitiesList.render();
    });

  }

});