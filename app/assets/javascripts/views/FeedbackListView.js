var app = app || {};

app.FeedbackListView = Backbone.View.extend({
  el: '#feedbackListViewContainer',

  render: function () {
    //Set up the overall page structure
    var appViewHTML = $('#feedbackListViewTemplate').html();
    this.$el.html( appViewHTML );

    var currentUsersGroupId = app.current_user.group.id
    // this is going through checking each feedback and grab appropriate feedbacks.]
    var view = this; // Make sure you have a reference to the current view (the word this will be redefined in the done handler of the fetch)

    this.collection.fetch().done(function () {
      // Go through the collection and store the current model as model
      var currentUsersFeedbacks = view.collection.each( function (model) { 
        // task done or not? You need to add into json.jbuilder file as well.
        var taskStatus = model.get("done"); //true or false
        // user rated to the task or not.
        var ratingStatus = model.get("rating");
        var groupIdOfFeedback = model.get("group_id")

        if ( groupIdOfFeedback === currentUsersGroupId 
          && taskStatus === true && ratingStatus === null ) {
          // Show a view for the current model in the each loop
          var feedbackListView = new app.FeedbackListItemView({model: model}); 
          feedbackListView.render();

          return true;

        } else {

          return false;

        }
      });
    });
  }
});




