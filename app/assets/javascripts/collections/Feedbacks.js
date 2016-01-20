var app = app || {};

app.Feedbacks = Backbone.Collection.extend({
  model: app.Feedback,
  url: '/feedbacks'
});