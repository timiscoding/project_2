var app = app || {};

app.Feedback = Backbone.Model.extend({
  urlRoot: '/feedbacks',
    // Set up any behaivor in here.
  initialize: function(){
    console.log("New feedbacks created.");
  }
});