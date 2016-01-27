var app = app ||{};
//creating task items and then put into
app.TaskListItemView = Backbone.View.extend({
  tagName: 'li', //Create a new element for each instance of this view.
  events: {
    'click .task-title': 'showTask',
    'click .toggle': 'toggle',
    'change input': 'saveCompletion'
  },

  saveCompletion: function (event) {
    if ( this.model.get("user_id") !== app.current_user.id ) {
      event.preventDefault();
      return false;
    }

    //you don"t have to put in the "$"changedEL. But, it is easy to see that has jQuery stuff.
    var $changedEl = this.$el.find("input");
    // .prop() = you can get "true or false" after clicked. If you do not hve prop(), it will be "on or off"
    var newVal = $changedEl.prop("checked");
    //set the "done" as newVal() to the server.
    this.model.set("done", newVal);
    // Save
    this.model.save();
  },

  toggle: function() {

    if ( app.current_user.id === this.model.get('user_id') ) {
      var thisEL = this.$el;
      this.model.set('done', !this.model.get('done'));
      this.model.save().done(function () {
        thisEL.remove();
      });
    }

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

