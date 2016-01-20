
var app = app || {};

app.FeedbackView = Backbone.View.extend({
  el: '#feedbackListViewContainer',
  render: function(){

    var feedbackViewTemplater = _.template( $('#feedbackView').html());
    this.$el.html( feedbackViewTemplater( this.model.toJSON() ));

    }
});




