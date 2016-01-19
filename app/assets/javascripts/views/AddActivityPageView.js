var app = app || {};

app.AddActivityPageView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #saveActivity' : 'saveActivity'
  },

  render: function() {
    var AddActivityPageView = _.template($( '#AddActivityPageView' ).html());
    this.$el.html( AddActivityPageView )
  },
  saveActivity: function(e) {
    e.preventDefault();
    if ($("#nameActivity").val() === ""){ return }
    else {
      var newTitleActivity = 

      }
  }
});
  // Activity
  //     t.string :title
  //     t.integer :effort
  //     t.integer :group_id
  //     t.integer :user_id