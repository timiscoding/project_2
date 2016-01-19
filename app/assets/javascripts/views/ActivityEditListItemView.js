var app = app || {};

app.ActivityEditListItemView = Backbone.View.extend({
  tagName: 'div',
  events: {

  },

  render: function () {
    // Get the activityListItemTemplate from out app.html.erb
    var activityEditListItemTemplate = _.template($('#activityEditListItemTemplate').html());
    // this.$el = new <li>, inside pass in the activityListItemTemplate 
    // and use the data associated with the model passed in
    this.$el.html(activityEditListItemTemplate(this.model.toJSON()));
    // append the whole thing to the #activityListItem container
    
    var effort = this.model.get('effort');

    var span = this.$el.find("span");

    var fullStars = function (num) {
      var $fullStars = $( "<i>" ).addClass("yellow fa fa-star fa-lg effort" + num).data("effort", num);
      span.append($fullStars);
    };
   
    var emptyStars = function (num) {
      var $emptyStars = $( "<i>" ).addClass("yellow fa fa-star-o fa-lg effort" + num).data("effort", num);
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
    


    this.$el.appendTo('#activitiesEditListContainer');
  }


});