var app = app ||{};
//creating feedback items and then put into 
app.FeedbackListItemView = Backbone.View.extend({
  tagName: 'li', //Create a new element for each instance of this view.
  events: {
    'click .toggle': 'toggle',
    'click button': 'giveNewFeedback'
  },

  giveNewFeedback: function (event) {
    var $currentEl = $(event.currentTarget);
    var desiredRating = $currentEl.attr("id");
    var taskID = this.model.get("task_id");
    var userID = app.current_user.id;

    var feedback = new app.Feedback({
      task_id: taskID,
      user_id: userID,
      rating: desiredRating
    });

    feedback.save();
  },

  toggle: function() {
    this.model.set('done', !this.model.get('done'));
  },

  // here is doing for a feedback.
  render: function(){
    var feedbackListViewTemplater = _.template( $('#feedbackListItemViewTemplate').html());

    var feedback = app.feedbacks.findWhere({ task_id: this.model.get("task_id") })

    var templateDetails = this.model.toJSON();
    templateDetails.rating = feedback.get("rating");

    this.$el.html( feedbackListViewTemplater( templateDetails ));
    $('ul#feedbacks').append( this.$el );

    this.$el.appendTo('#feedbackListViewContainer');
  }

});

