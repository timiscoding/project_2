var app = app || {};

app.NegativeMessageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #doTomorrow': 'doTomorrow'
  },

  initialize: function () {
    var negativeResponse;
  },

  doTomorrow: function () {
    console.log(negativeResponse);
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
          $('#taskTitle').html(negativeResponse.get("task").title)
        }
      });
    });
  }


});