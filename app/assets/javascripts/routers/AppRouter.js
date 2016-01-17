var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'app'
  },

  app: function(){
    if ( $('#main').length === 0 ) { return; }
    var appView = new app.AppView({});
    appView.render();
  }
});