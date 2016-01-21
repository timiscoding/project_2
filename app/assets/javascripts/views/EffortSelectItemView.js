var app = app || {};

app.EffortSelectItemView = Backbone.View.extend({
  tagName: 'i',

  events: {
    'click': 'select'
  },

  select: function () {
    this.$el.removeClass('fa-star-o').addClass('fa-star');
    this.$el.prevAll().removeClass('fa-star-o').addClass('fa-star')
    this.$el.nextAll().removeClass('fa-star').addClass('fa-star-o');
    var selectedEffort = this.$el.data("effort");
    console.log(this.$el.data("effort"));
    this.model.set("effort", selectedEffort);
    
    var effortLabelUpdate;
    switch (selectedEffort) {
      case 1:
      effortLabelUpdate = "Piece of cake";
      break;
      case 2:
      effortLabelUpdate = "Not too bad";
      break;
      case 3:
      effortLabelUpdate = "It'a a big task";
      break;
      case 4:
      effortLabelUpdate = "Kill me now!";
      break;
    }
    this.$el.parent().find(".effortText").text(effortLabelUpdate);
  },

  render: function (num, fullStar) {
    this.$el.data("effort", num);
    var fullStarEl = $( "<i>" );
    var emptyStarEl = $( "<i>" );
    if (fullStar) {
      this.$el.addClass("yellow fa fa-star fa-lg");
    } else {
      this.$el.addClass("yellow fa fa-star-o fa-lg");
    }
    return this;
  }
});