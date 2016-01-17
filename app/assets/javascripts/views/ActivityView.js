var app = app || {};

app.ActivityView = Backbone.View.extend({
  el: '#main',

  render: function () {
    // Gets the activity view template to setup the view structure
    var activityViewTemplate = _.template($('#activityViewTemplate').html());
    // Sets #main HTML to activity view template's HTML
    this.$el.append(activityViewTemplate);
    // CHANGE *append* to *html* later

    this.collection.each(function (activity) {
      var activityListView = new app.ActivityListView({ model: activity });
      activityListView.render();
    });
  }

});