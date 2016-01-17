var app = app || {};

app.ActivityListView = Backbone.View.extend({
  tagName: 'li',
  events: {

  },

  render: function () {

//    this.$el.text(this.model.get('title'));
//    this.$el.appendTo('#activitiesListContainer');

    var activityViewTemplater = _.template($('#activityListItemTemplate').html());
    this.$el.html(activityViewTemplater(this.model.toJSON()));
    this.$el.appendTo('#activitiesListContainer');
  }


});