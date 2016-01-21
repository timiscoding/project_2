var app = app || {};

app.NegativeMessageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #doTomorrow': 'doTomorrow',
    'click #clear': 'clearView'
  },

  initialize: function () {
    var negativeResponse;
  },

  // push due date forward 1 day
  // deduct a point
  // reset done status
  // remove all feedback for the task
  doTomorrow: function () {
    $('#doTomorrow').prop("disabled", true).text('Working...');
    // console.log(negativeResponse);
    app.tasks = new app.Tasks();
    app.tasks.fetch().done(function () {
      var task = app.tasks.findWhere({ id: negativeResponse.get('task').id }); // task with bad rating
      // console.log('task b', task, task.get('due_date'));
      // var due_date = task.get('due_date');
      var new_due_date = moment().add(1, 'days').format('YYYY-MM-DD'); // set to tomorrow
      // console.log('due date', due_date, 'new due date', new_due_date);
      task.set({ due_date: new_due_date, done: false });
      console.log('task a', task);
      task.save(null, {
        success: function (model, response, options) {
          $("#status").prepend("<p>The task is now due " + response.due_date + "</p>");
        },
        error: function (model, response, options) {
          $("#status").prepend("<p>Couldn't update task due date</p>");
        }
      });
    });

    console.log('score b', app.current_user.total_score);
    console.log('score a', app.current_user.total_score);
    var user = new app.User(app.current_user);
    user.set({ total_score: app.current_user.total_score - 1 });
    user.save(null, {
      success: function (model, response, options) {
        $("#status").prepend("<p>Your total score is now " + response.total_score + '</p>');
      },
      error: function (model, response, options) {
        $("#status").prepend( "<p>Couldn't update score</p>" );
      }
    });

    // get all feedback for this task
    var taskFeedbacks = app.userFeedbacks.filter(function(f) {
      return f.get('task').id === negativeResponse.get('task').id ;
    });

    // remove all feedback records in rails for this task
    var taskFeedbacksIDs = _.pluck(taskFeedbacks, 'id');
    taskFeedbacksIDs.forEach( function(feedbackID) {
      console.log('destroying feedback ', feedbackID);
      var feedback = new app.Feedback({ id: feedbackID });
      feedback.destroy();
    });
    // console.log('taskFeedback', taskFeedbacks);

    // disable button
    $('#doTomorrow').text('Got it!');
    $('#doTomorrow').attr('id', 'clear').prop("disabled", false);
  },

  clearView: function() {
    this.remove();
  },

  render: function () {
    // var messageShowing;
    var NegativeMessageViewTemplate = _.template($('#NegativeMessageViewTemplate').html());
    var view = this;
    app.userFeedbacks = new app.UserFeedbacks(null, {user_id: app.current_user.id});
    app.userFeedbacks.fetch().done(function () {
      // console.log('my feedbacks', app.userFeedbacks);
      // if (!messageShowing) {
      //   messageShowing = true;
        negativeResponse = app.userFeedbacks.where({ rating: 0 })[0];
        if (!negativeResponse) { return; }
        console.log('neg feedback detected');
        view.$el.html(NegativeMessageViewTemplate);
        $('#taskTitle').html(negativeResponse.get("task").title);
      // }

    });

  }


});