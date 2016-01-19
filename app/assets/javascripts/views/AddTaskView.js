var app = app || {};

app.AddTaskView = Backbone.View.extend({
  el: '#main',

  render: function () {
    var addTaskViewTemplate = _.template($('#addTaskViewTemplate').html());
    this.$el.append( addTaskViewTemplate );
    
  }

})
