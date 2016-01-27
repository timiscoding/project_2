var app = app || {};

app.FeedbackListView = Backbone.View.extend({
  el: '#notification',

  render: function () {
    //Set up the overall page structure
    if ( $('#notification').length ) {
      console.log('not showing feedbackListItemView as there is already a notification being shown');
      return;
    }

    var currentUsersGroupId = app.current_user.group.id
    // this is going through checking each feedback and grab appropriate feedbacks.
    var view = this; // Make sure you have a reference to the current view (the word "this" will be redefined in the done handler of the fetch)

    this.collection.fetch().done(function () {
      // get all feedback requests for the current user
      // a feedback request gets generated for all members in rails whenever the task owner ticks the done checkbox
      var feedbackRequests = view.collection.where({ rating: null, user_id: app.current_user.id });
      if ( feedbackRequests.length === 0 ) { return; }
      var feedbackListView = new app.FeedbackListItemView({model: feedbackRequests[0] }); // get the first one and show it to the user
      feedbackListView.render();
    });
  }
});





