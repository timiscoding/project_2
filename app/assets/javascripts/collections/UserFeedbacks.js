var app = app || {};

app.UserFeedbacks = Backbone.Collection.extend({
  initialize: function(model, args) {
    this.url = '/users/' + args.user_id + '/feedbacks';
  }
});