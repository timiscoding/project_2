var app = app || {};

app.AddActivityPageView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #saveActivity' : 'saveActivity'
  },

  initialize: function () {
    this.alreadySaved = false;
    this.model = this.model || new app.Activity();
    
  },

  render: function() {
    var AddActivityPageView = _.template($( '#AddActivityPageView' ).html());
    this.$el.html( AddActivityPageView );

    var effort = 1;
    var $eSelect = this.$el.find("#effortSelector");
    console.log(effort);

    for (var i = 1; i < 5; i++) {
      if (i <= effort) {
        var effortSelectItem = new app.EffortSelectItemView({ model: this.model });
        var fullStar = true;
        effortSelectItem.render(i, fullStar).$el.appendTo($eSelect);  
      } else {
        var effortSelectItem = new app.EffortSelectItemView({ model: this.model });
        var fullStar = false;
        effortSelectItem.render(i, fullStar).$el.appendTo($eSelect);
      }
    }

    var effortLabel;
    switch (effort) {
      case 1:
      effortLabel = "Piece of cake";
      break;
      case 2:
      effortLabel = "Not too bad";
      break;
      case 3:
      effortLabel = "It'a a big task";
      break;
      case 4:
      effortLabel = "Kill me now!";
      break;
    }

    $eSelect.append('<p class="effortText">' + effortLabel + '</p>');

  },

  saveActivity: function(e) {
    if (this.alreadySaved) { return; }
    this.alreadySaved = true;

    e.preventDefault();
    var $titleActivity = $('#nameActivity').val();
    if ( !$titleActivity ){ return }
      console.log( $titleActivity )
      app.current_user.group.id

      this.model.set({
        title: $titleActivity,
        group_id: app.current_user.group.id,
        user_id: app.current_user.id
      })

      this.model.save().done(function () {
        app.router.navigate("/activities", true);
      });
  }
});
