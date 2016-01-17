var app = app || {};

app.Task = Backbone.Model.extend({
  urlRoot: '/tasks',
    // Set up any behaivor in here.
  initialize: function(){
    console.log("New task created.");
  }
});