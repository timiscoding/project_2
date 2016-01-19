app.TaskFeedbackView = Backbone.View.extend({
  el: '#main',

  render: function () {
// need to render a view in the taskListItem to rate completed tasks form other member 
// template should be in every completed tasks:
  //- How do you feel about this effort ? happyIcon sadIcon
// on click on this icons, that should add score to total_score according to the effort
  app.memberList.toJSON().users; //array of member from current user group
  }
});