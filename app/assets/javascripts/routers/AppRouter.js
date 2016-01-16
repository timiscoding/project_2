var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app'
  },

  app: function(){
    var appView = new app.AppView({});
    appView.render();
  }
});