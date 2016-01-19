var app = app ||{};

app.Feedbacks = Backbone.Collection.extend({
  model: app.Feedback,
  url: '/feedbacks', //data source url
  initialize: function(){
    //This is where my event handler will be added.
    this.on("add", function(Feedback){
      //create a new FeedbackView and give it some information to represent.
      var feedbackView = new app.FeedbackView({ model: feedback });
      //call render on it
      feedbackView.render();
    });
  }
});