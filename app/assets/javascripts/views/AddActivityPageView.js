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
    var $titleActivity = $('#nameActivity').val();
    if ( !$titleActivity ){ return }
      console.log( $titleActivity )
      app.current_user.group.id

      var activity = new app.Activity({
        title: $titleActivity,
        effort: 2,
        group_id: app.current_user.group.id,
        user_id: app.current_user.id
      });

      activity.save().done(function () {
        app.router.navigate("/activities", true);
      });
      console.log( activity.toJSON() );
  }
});


