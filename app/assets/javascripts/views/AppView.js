var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  render: function(){

    var taskViewTemplate = "taskViewTemplate";
    this.$el.append(taskViewTemplate);

    // var memberListView = new app.MemberListView();
    // this.$el.append( memberListView.el );

    var appViewTemplate = "anything";
    this.$el.append(appViewTemplate);
  }
});