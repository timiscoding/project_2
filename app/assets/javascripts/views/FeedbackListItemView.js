var app = app ||{};
//creating feedback items and then put into 
app.FeedbackListItemView = Backbone.View.extend({
  tagName: 'li', //Create a new element for each instance of this view.
  events: {
    'click .toggle': 'toggle'
  },

  toggle: function() {
    this.model.set('done', !this.model.get('done'));
  },

  // here is doing for a feedback.
  render: function(){
    var feedbackListViewTemplater = _.template( $('#feedbackListItemViewTemplate').html());
    this.$el.html( feedbackListViewTemplater( this.model.toJSON() ));
    $('ul#feedbacks').append( this.$el );

    this.$el.appendTo('#feedbackListViewContainer');
  }

});

