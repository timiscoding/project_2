var app = app || {};

app.UserFeedbacks = Backbone.Collection.extend({
  initialize: function(model, args) {
    this.url = '/users/' + args.user_id + '/feedbacks';
    // this.on("add", this.checkFeedback);
  },

  // checkFeedback: function(feedback) {
  //   // console.log('feedback', feedback);
  //   // var rating = feedback.get('rating');
  //   // var user = feedback.get('user');
  //   // var task = feedback.get('task');

  //   // console.log('rating: ' + rating, 'user: ', user.first_name, 'task: ' + task.title);
  //   // if (rating === 0) { // member unhappy with this user's task

  //   // }
  //   // check if all feedback for this task is available
  //   // console.log('feedbacks', this);
  //   var this_task = feedback.get('task');
  //   this_task.due_date = new Date( this_task.due_date );
  //   console.log('task', this_task.id, this_task.title, this_task.due_date);
  //   // find all feedback for this task
  //   var taskFeedbacks = this.filter( function(feedback) {
  //     // console.log(feedback);
  //     var feedback_date = new Date( feedback.get('date') );
  //     if ( feedback.get('task').id === this_task.id &&    // only the feedback for this task
  //          feedback_date > this_task.due_date ) {         // only feedback that was updated after the due date for task
  //       return true;
  //     }
  //     return false;
  //   });
  //   console.log('task feedback', taskFeedbacks);
  //   // number of members in this group
  //   var memberCount = app.memberList.get('users').length;
  //   // ensure everyone has provided feedback
  //   if (taskFeedbacks.length === memberCount - 1) { // all members voted. don't include self in membercount

  //   }

  // }
});