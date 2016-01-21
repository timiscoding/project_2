var app = app ||{};
//creating feedback items and then put into 
app.FeedbackListItemView = Backbone.View.extend({
  tagName: 'li', //Create a new element for each instance of this view.
  events: {
    'click .toggle': 'toggle',
    'click button': 'giveNewFeedback'
  },
  //Click button 0 or 1 on feedback and save the rating to saver.
  giveNewFeedback: function (event) {
    var $currentEl = $(event.currentTarget);
    var desiredRating = $currentEl.attr("id");
    var taskID = this.model.get("task_id");
    var userID = app.current_user.id;

    var feedback = new app.Feedback({
      task_id: taskID,
      user_id: userID,
      rating: desiredRating || 0
    });

    feedback.save();
  },
  // //toggle function to know if the task has been done or not.
  // toggle: function() {
  //   this.model.set('done', !this.model.get('done'));
  // },

  // here is doing for a feedback.
  render: function(){
    var feedbackListViewTemplater = _.template( $('#feedbackListItemViewTemplate').html());

    var feedback = app.feedbacks.where({ task_id: this.model.get("task_id") });

    var templateDetails = this.model.toJSON();
    templateDetails.rating = _.last(feedback).get("rating");

    var feedbacks = app.feedbacks.where({ task_id: this.model.get("task_id") });
    var feedbackRatingArray = _.map(feedbacks, function (feedback) {
      return feedback.get("rating");
    });

    var sumOfRatings = _.reduce(feedbackRatingArray, function (sum, num) {
      return sum + num;
    });    

    templateDetails.average_rating = sumOfRatings / feedbackRatingArray.length;

    this.$el.html( feedbackListViewTemplater( templateDetails ));
    $('ul#feedbacks').append( this.$el );

    this.$el.appendTo('#feedbackListViewContainer');
  }

});

