var app = app || {};

app.AddTaskPageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click #saveTask': 'saveTask'
  },

  initialize: function () {
    if (!app.activities.length) {
      app.activities.fetch({replace: true, reset: true});
    };
  },

  saveTask: function () {
    $dateSelect = $('#dateSelect').val();
    if (!selectedUser || !$dateSelect) {return;}

    // app.tasks.create({ 
    //    tasks: {
    //   user_id: selectedUser,
    //   activity_id: this.model.get('id'),
    //   due_date: $dateSelect,
    //   score: this.model.get('effort')
    // }});

    $.ajax({
      url: "/tasks",
      method: "POST",
      dataType: "JSON",
      data: { task: {
        user_id: selectedUser,
        activity_id: this.model.get('id'),
        due_date: $dateSelect,
        score: this.model.get('effort'),
        done: false
      }},
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        console.log('somethign went wrong');
      }
    });

//    app.tasks.create({ user_id: })
  },

    // t.integer  "user_id"
    // t.integer  "activity_id"
    // t.date     "due_date"
    // t.boolean  "done"
    // t.datetime "created_at",  null: false
    // t.datetime "updated_at",  null: false
    // t.integer  "score"

  render: function () {
    // Gets the activityPageViewTemplate from our app.html.erb to setup the view structure
    var addTaskPageViewTemplate = _.template($('#addTaskPageViewTemplate').html());
    // Sets #main HTML to activity view template's HTML
    this.$el.html(addTaskPageViewTemplate(this.model.toJSON()));

    app.memberList.fetch().done(function () {
      _.each(app.memberList.toJSON().users, function (user) {
        var memberSelectItem = new app.MemberSelectItemView({ model: user });
        memberSelectItem.render();
      });
    });

    selectedUser = false;

  }

});