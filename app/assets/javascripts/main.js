_.templateSettings = {
 evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
 interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};

app.tasks = new app.Tasks();



$(document).ready(function(){
  // Initialize the activity list
  app.activities = new app.Activities()

  app.router = new app.AppRouter();
  Backbone.history.start();
});