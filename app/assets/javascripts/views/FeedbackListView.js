var app = app || {};

app.FeedbackListView = Backbone.View.extend({
  el: '#notification',

  render: function () {
    //Set up the overall page structure
    if ( $('#notification').length ) {
      console.log('not showing feedbackListItemView as there is already a notification');
      return;
    }

    var appViewHTML = $('#feedbackListViewTemplate').html();
    this.$el.html( appViewHTML );

    var currentUsersGroupId = app.current_user.group.id
    // this is going through checking each feedback and grab appropriate feedbacks.
    var view = this; // Make sure you have a reference to the current view (the word "this" will be redefined in the done handler of the fetch)

    this.collection.fetch().done(function () {
      // Go through the collection and store the current model as model
      // task done or not? You need to add into json.jbuilder file as well becasuse task model does not have "rating".
      // TIM: commented out below line
      // var currentUsersFeedbacks = view.collection.each( function (model) {
      var currentUsersFeedbacks = view.collection.every( function (model) {

        var taskStatus = model.get("done"); //true or false
        // user rated to the task or not.
        var ratingStatus = model.get("rating");
        var groupIdOfFeedback = model.get("group_id");

        // debugger;

        if ( groupIdOfFeedback === currentUsersGroupId
          && taskStatus === true
          && model.get("user_id") !== app.current_user.id //current user cannot rate for the ownn task.
          && app.feedbacks.where({ //make sure to show feedbacks that crrent user has never rated.
            task_id: model.get("task_id"),
            user_id: app.current_user.id
          }).length === 0) {
          // Show a view for the current model in the each loop
          var feedbackListView = new app.FeedbackListItemView({model: model});
          feedbackListView.render();
          // TIM: we want to display only 1 feedback at time
          // console.log('wtf inside', model.get('title'));
          return false;
        }
        // console.log('wtf outside', taskStatus, ratingStatus, groupIdOfFeedback, currentUsersGroupId, model.get("user_id"), app.current_user.id);
      });
    });
  }
});





