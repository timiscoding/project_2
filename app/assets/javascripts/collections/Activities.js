var app = app || {};

app.Activities = Backbone.Collection.extend({
  model: app.Activity,
  url: '/activities',

  initialize: function(){
    this.on("add", function(activity){
    //   var activityView = new app.ActivityView({ model: activity });
    //   activityView.render();
   });
  }
});