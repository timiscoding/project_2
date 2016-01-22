var app = app || {};

app.NegativeMessageView = Backbone.View.extend({
  tagName: 'div',

  id: 'notification',

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

    // update task due date to tomorrow
    app.tasks = app.tasks || new app.Tasks();
    app.tasks.fetch().done(function () {
      var task = app.tasks.findWhere({ id: negativeResponse.get('task').id }); // task with bad rating
      var new_due_date = moment().add(1, 'days').format('YYYY-MM-DD'); // set to tomorrow
      task.set({ due_date: new_due_date, done: false });
      task.save(null, {
        success: function (model, response, options) {
          $("#status").prepend("<p>The task is now due " + response.due_date + "</p>");
        },
        error: function (model, response, options) {
          $("#status").prepend("<p>Couldn't update task due date</p>");
        }
      });
    });

    // deduct 1 point from total score
    var user = new app.User(app.current_user);
    user.set({ total_score: app.current_user.total_score - 1 });
    user.save(null, {
      success: function (model, response, options) {
        $("#status").prepend("<p>Your total score is now " + response.total_score + '</p>');
        app.current_user.total_score = response.total_score;
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
      var feedback = new app.Feedback({ id: feedbackID });
      feedback.destroy();
    });

    // disable button
    $('#doTomorrow').text('Got it!');
    $('#doTomorrow').attr('id', 'clear').prop("disabled", false);
  },

  clearView: function() {
    this.remove();
  },

  render: function () {
    // don't display anything if there is already a notification showing
    if ( $('#notification').length ) { console.log('notification area not empty'); return; }
    var NegativeMessageViewTemplate = _.template($('#NegativeMessageViewTemplate').html());
    var view = this;

    negativeResponse = app.userFeedbacks.where({ rating: 0 })[0];
    if (!negativeResponse) { return; } // don't show anything if no negative feedback
    view.$el.html(NegativeMessageViewTemplate).prependTo('#main');
    $('#taskTitle').html(negativeResponse.get("task").title);
  }
});