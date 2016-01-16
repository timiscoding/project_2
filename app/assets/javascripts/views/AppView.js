var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  render: function(){
    var taskViewTemplate = "taskViewTemplate";
    this.$el.append(taskViewTemplate);

    var userListViewTemplate = "userListViewTemplate";
    this.$el.append(userListViewTemplate);

    var appViewTemplate = "anything";
    this.$el.append(appViewTemplate);
  }
});