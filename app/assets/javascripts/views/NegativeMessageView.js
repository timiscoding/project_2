var app = app || {};

app.NegativeMessageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #doTomorrow': 'doTomorrow'
  },

  initialize: function () {
    var negativeResponse;
  },

  // push due date forward 1 day
  // deduct a point
  // reset done status
  // remove all feedback for the task
  // remove view
  doTomorrow: function () {
    // console.log(negativeResponse);
    var task = app.tasks.findWhere({ id: negativeResponse.get('task').id }); // task with bad rating
    // console.log('task b', task, task.get('due_date'));
    var due_date = task.get('due_date');
    var new_due_date = moment(due_date).add(1, 'days').format('YYYY-MM-DD');
    // console.log('due date', due_date, 'new due date', new_due_date);
    task.set({ due_date: new_due_date, done: false });
    // console.log('task a', task);
    // task.save(null, {
    //   success: function (model, response, options) {
    //     $("#status").prepend("<p>The task is now due " + response.due_date + "</p>");
    //   },
    //   error: function (model, response, options) {
    //     $("#status").prepend("Couldn't update task due date");
    //   }
    // });
    // console.log('score b', app.current_user.total_score);
    app.current_user.total_score -= 1;
    // console.log('score a', app.current_user.total_score);
    // var user = new app.User(app.current_user);
    // user.save(null, {
    //   success: function (model, response, options) {
    //     $("#status").prepend("<p>Your total score is now " + response.total_score + '</p>');
    //   },
    //   error: function (model, response, options) {
    //     $("#status").prepend( "Couldn't update score" );
    //   }
    // });

    // get all feedback for this task
    var taskFeedbacks = app.userFeedbacks.filter(function(f) {
      console.log('wut', f.get('task').id);
      return f.get('task').id === negativeResponse.get('task').id ;
    });
    // taskFeedbacks.forEach( function(feedback) {
    //   feedback
    // });
    console.log('taskFeedback', taskFeedbacks);
    debugger

  },

  render: function () {
    var messageShowing;
    var NegativeMessageViewTemplate = _.template($('#NegativeMessageViewTemplate').html());
    this.$el.html(NegativeMessageViewTemplate);
    app.tasks = new app.Tasks();
    app.tasks.fetch().done(function () {
      app.userFeedbacks = new app.UserFeedbacks(null, {user_id: app.current_user.id});
      app.userFeedbacks.fetch().done(function () {
        console.log('my feedbacks', app.userFeedbacks);
        if (!messageShowing) {
          messageShowing = true;
          negativeResponse = app.userFeedbacks.where({ rating: 0 })[0];
          $('#taskTitle').html(negativeResponse.get("task").title);
        }

      });
    });
  }


});