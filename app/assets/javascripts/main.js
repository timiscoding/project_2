_.templateSettings = {
 evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
 interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};

$(document).ready(function(){
  app.getActivityList = new app.Activities()
  app.router = new app.AppRouter();
  Backbone.history.start();
});