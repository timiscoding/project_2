var app = app || {};

app.FeedbackListView = Backbone.View.extend({
  el: '#feedbackListViewContainer',

  render: function () {
    //Set up the overall page structure
    var appViewHTML = $('#feedbackListViewTemplate').html();
    this.$el.html( appViewHTML );

    var currentUsersGroupId = app.current_user.group.id
    // this is going through checking each feedback and grab appropriate feedbacks.
    var currentUsersTasks = this.collection.select(function (model) {
      // task done or not? You need to add into json.jbuilder file as well.
      var taskStatus = this.model.get("done"); //true or false
      console.log( taskStatus );
      // user give rating or not.
      var ratingStatus = this.model.get("rating");
      var groupIdOfFeedback = this.model.get("group_id")
      
      // testing!!! need to include one omre condition && ratingStatus === ""
      // if ( groupIdOfFeedback === currentUsersGroupId && taskStatus === true ) {
        var feedbackListView = new app.FeedbackListItemView({model: model});
        feedbackListView.render();
      //   return true;
      // } else {
      //   return false;
      // }
    });
  }
});





