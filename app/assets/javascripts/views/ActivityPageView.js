var app = app || {};

app.ActivityPageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #editActivitiesButton': 'editActivities'
  },

  render: function () {
    // Gets the activityPageViewTemplate from our app.html.erb to setup the view structure
    var activityPageViewTemplate = _.template($('#activityPageViewTemplate').html());
    // Sets #main HTML to activity view template's HTML
    this.$el.html(activityPageViewTemplate);
    // ** note: change *append* to *html* later **

    // we want to get the current users group id
    var currentUsersGroupId = app.current_user.group.id

    // we passed in a collection via the appRouter, 
    // now we want to filter out records who's group id dosn't match current users' id
    var currentUsersActivities = this.collection.where({ group_id: currentUsersGroupId })

    // for each item in the collection...
    _(currentUsersActivities).each(function (activity) {
      // initialize new ActivityListItemView and pass in item
      var activityListItemView = new app.ActivityListItemView({ model: activity });
      activityListItemView.render();
    });
  },

  editActivities: function () {
    app.router.navigate('activities/edit', true);
  }

});