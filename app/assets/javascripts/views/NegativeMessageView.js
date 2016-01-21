var app = app || {};

app.NegativeMessageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #doTomorrow': 'doTomorrow'
  },

  doTomorrow: function () {

  },

  render: function () {
    var NegativeMessageViewTemplate = _.template($('#NegativeMessageViewTemplate').html());
    this.$el.html(NegativeMessageViewTemplate);
    app.tasks = new app.Tasks();
    app.tasks.fetch().done(function () {
      app.userFeedbacks = new app.userFeedbacks(null, {user_id: app.current_user.id});
      app.userFeedbacks.fetch().done(function () {
        
      })
    }
  }


});