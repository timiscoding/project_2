var app = app || {};

app.AddTaskPageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #saveTask': 'editActivities'
  },

  initialize: function () {
    if (!app.activities.length) {
      app.activities.fetch({replace: true, reset: true});
    };
  },

  render: function () {
    // Gets the activityPageViewTemplate from our app.html.erb to setup the view structure
    var addTaskPageViewTemplate = _.template($('#addTaskPageViewTemplate').html());
    // Sets #main HTML to activity view template's HTML
    this.$el.html(addTaskPageViewTemplate(this.model.toJSON()));

    var span = this.$el.find("#memberListContainer");


    app.memberList.fetch().done(function () {
      _.each(app.memberList.toJSON().users, function (user) {
        var memberSelectItem = new app.MemberSelectItemView({ model: user });
        memberSelectItem.render();
      });
    });

    // ** note: change *append* to *html* later **
    var activity = this.model.get("title");

    console.log(activity);


    // // we want to get the current users group id
    // var currentUsersGroupId = app.current_user.group.id

    // // we passed in a collection via the appRouter, 
    // // now we want to filter out records who's group id dosn't match current users' id
    // var currentUsersActivities = this.collection.where({ group_id: currentUsersGroupId })

  }

});