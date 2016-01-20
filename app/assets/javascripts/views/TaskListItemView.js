var app = app ||{};
//creating task items and then put into 
app.TaskListItemView = Backbone.View.extend({
  //el: '#main',
  tagName: 'li', //Create a new element for each instance of this view.
  events: {
    'click .task-title': 'showTask',
    'click .toggle': 'toggle'
  },

  toggle: function() {
    this.model.set('done', !this.model.get('done'));
  },

  showTask: function(){
    app.router.navigate('tasks/' + this.model.get('id'), true);
  },
  // here is doing for a task, but var currentUsersTasks = this.collection.select(function (model) {..is doing kind of loop.
  render: function(){
    var taskListViewTemplater = _.template( $('#taskListItemViewTemplate').html());
    this.$el.html( taskListViewTemplater( this.model.toJSON() ));
    $('#tasks').append( this.el );

    var effort = this.model.get('effort');

    var span = this.$el.find("span");

    var fullStars = function (num) {
      var $fullStars = $( "<i>" ).addClass("yellow fa fa-star effort" + num).data("effort", num);
      span.append($fullStars);
    };
   
    var emptyStars = function (num) {
      var $emptyStars = $( "<i>" ).addClass("yellow fa fa-star-o effort" + num).data("effort", num);
      span.append($emptyStars);
    };
    
    // Loop through append full star x number in effort
    for (var i = 0; i < effort; i++) {
      fullStars(i);
    };

    // Loop through append full star x 4 - effort
    for (var i = 0; i < (4 - effort); i++) {
      emptyStars(i);
    };

    this.$el.appendTo('#taskListViewContainer');

    // var activityID = this.model.get("activity_id");
    // var activity = app.activities.get( this.model.get("activity_id") );
    // this.$el.append("<p>Title: " + activity.get("title") + "</p>");
    // this.$el.append("<p>Score: " + activity.get("effort") + "</p>");

    // var taskDueDate = this.model.get('due_date');
    // this.$el.append("<p>DUE: " + taskDueDate + "</p>");

    // this.$el.appendTo('#tasks');

  }

});

