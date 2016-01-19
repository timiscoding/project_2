_.templateSettings = {
 evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
 interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};

app.tasks = new app.Tasks();
app.ENTER_KEY = 13;


$(document).ready(function(){
  // Initialize the activity list
  app.activities = new app.Activities();

  app.memberList = new app.Group(null, { group_id: app.current_user.group.id });
  app.current_user.groups = new app.UserGroups(null, { user_id: app.current_user.id });
  app.groups = new app.Groups();

  app.router = new app.AppRouter();
  Backbone.history.start();
});