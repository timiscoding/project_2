var app = app ||{};
//creating feedback items and then put into
app.FeedbackListItemView = Backbone.View.extend({
  // TIM: commented below line
  // tagName: 'li', //Create a new element for each instance of this view.
  tagName: 'div',
  id: 'notification',
  className: 'notifyContainer shrinkToTransparent',

  events: {
    //'click .toggle': 'toggle',
    'click button': 'giveNewFeedback'
  },
  //Click button 0 or 1 on feedback and save the rating to the saver.
  giveNewFeedback: function (event) {
    var $currentEl = $(event.currentTarget); //get the currentTarget element
    var desiredRating = $currentEl.attr("id"); //get the rating score of current feedback. Here, rating and ID are same. 0 or 1. you can refer to the app.html.erb
    var taskID = this.model.get("task_id"); //get the task ID related to the feedback
    var userID = app.current_user.id; //current user ID
    console.log(desiredRating);
    //create new feedback with rating
    var feedback = new app.Feedback({
      task_id: taskID, //task_id = taskID
      user_id: userID, //user_id = userID
      rating: desiredRating || 0 // id rating is "null", put 0. to avoid error. jsut in case.
    });
    // Thanks to the code below, you do not need to refresh by hand.
    feedbackShowing = false;
    var thisEl = this.$el;
    thisEl.addClass('shrinkToTransparent')
    feedback.save().done(function () {
      setTimeout(function(){ 
        thisEl.remove();
      }, 1000);
    });
  },

  // here is doing for a feedback.
  render: function(){

    var feedbackListViewTemplater = _.template( $('#feedbackListItemViewTemplate').html());

    var feedback = app.feedbacks.where({ task_id: this.model.get("task_id") });

    var thisEl = this.$el;
    setTimeout(function(){ 
      thisEl.removeClass('shrinkToTransparent')
    }, 100);

    var templateDetails = this.model.toJSON();

    // this one : rating = latest updated rating by a user( this is not average one.)
    //templateDetails.rating = _.last(feedback).get("rating");

    var feedbacks = app.feedbacks.where({ task_id: this.model.get("task_id") });
    var feedbackRatingArray = _.map(feedbacks, function (feedback) {
      return feedback.get("rating");
    });

    // calculate sum of all of the rating by each users
    var sumOfRatings = _.reduce(feedbackRatingArray, function (sum, num) {
      // to avoid including the rating -1 which is default value.
      if (num >= 0) {
        return sum + num;
      }
      return sum;
    });
    // average_rating = sum of the rating score divided by the number of rating.
    templateDetails.average_rating = sumOfRatings / feedbackRatingArray.length;

    // this.$el.html( feedbackListViewTemplater( templateDetails ));
    // $('ul#feedbacks').append( this.$el );

    // TIM: commented below
    // this.$el.appendTo('#feedbackListViewContainer');
    this.$el.html( feedbackListViewTemplater( templateDetails ) ).prependTo('#main');
  }

});

