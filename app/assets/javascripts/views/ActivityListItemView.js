var app = app || {};

app.ActivityListItemView = Backbone.View.extend({
  tagName: 'li',
  events: {

  },

  render: function () {
    // Get the activityListItemTemplate from out app.html.erb
    var activityListItemTemplate = _.template($('#activityListItemTemplate').html());
    // this.$el = new <li>, inside pass in the activityListItemTemplate 
    // and use the data associated with the model passed in
    this.$el.html(activityListItemTemplate(this.model.toJSON()));
    // append the whole thing to the #activityListItem container
    this.$el.appendTo('#activitiesListContainer');
  }


});