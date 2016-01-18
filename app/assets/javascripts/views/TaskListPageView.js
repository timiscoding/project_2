var app = app || {};

app.TaskListPageView = Backbone.View.extend({
  el: '#main',

  render: function () {
    // Gets the activityPageViewTemplate from our app.html.erb to setup the view structure
    var taskListPageViewTemplate = _.template($('#taskListPageViewTemplate').html());
    // Sets #main HTML to activity view template's HTML
    this.$el.html(taskListPageViewTemplate);

  }

});