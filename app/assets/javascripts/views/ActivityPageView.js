var app = app || {};

app.ActivityPageView = Backbone.View.extend({
  el: '#main',

  render: function () {
    // Gets the activityPageViewTemplate from our app.html.erb to setup the view structure
    var activityPageViewTemplate = _.template($('#activityPageViewTemplate').html());
    // Sets #main HTML to activity view template's HTML
    this.$el.append(activityPageViewTemplate);
    // ** note: change *append* to *html* later **

    // we passed in a collection via the appRouter, 
    // for each item in the collection...
    this.collection.each(function (activity) {
      // initialize new ActivityListItemView and pass in item
      var activityListItemView = new app.ActivityListItemView({ model: activity });
      activityListItemView.render();
    });
  }

});