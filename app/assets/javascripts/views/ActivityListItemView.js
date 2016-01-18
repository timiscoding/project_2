var app = app || {};

app.ActivityListItemView = Backbone.View.extend({
  tagName: 'li',
  events: {

  },

  render: function () {
    // Get the activityListItemTemplate from out app.html.erb
    var activityListItemTemplate = _.template($('#activityListItemTemplate').html());
    // this.$el = new <li>, inside pass in the activityListItemTemplate 
    // and use the data associated with the model passed in
    this.$el.html(activityListItemTemplate(this.model.toJSON()));
    // append the whole thing to the #activityListItem container
    
    var effort = this.model.get('effort');

    
    var pTag = this.$el.find("p");

    var fullStars = function (num) {
      var $fullStars = $( "<i>" ).addClass("yellow fa fa-star effort" + num).data("effort", num);
      pTag.append($fullStars);
    };
   
    var emptyStars = function (num) {
      var $emptyStars = $( "<i>" ).addClass("yellow fa fa-star-o effort" + num).data("effort", num);
      pTag.append($emptyStars);
    };
    
    // Loop through append full star x number in effort
    for (var i = 0; i < effort; i++) {
      fullStars(i);
    };

    // Loop through append full star x 4 - effort
    for (var i = 0; i < (4 - effort); i++) {
      emptyStars(i);
    };
    

    
    // Loop through append full star x number in effort
    // for (var i = 0; i < effort; i++) {
    //   var $fullStars = $( "<i>" ).addClass("yellow fa fa-star");
    //   this.$el.append($fullStars);
    // };

    // // Loop through append full star x 4 - effort
    // for (var i = 0; i < (4 - effort); i++) {
    //   var $emptyStars = $( "<i>" ).addClass("yellow fa fa-star-o");
    //   this.$el.append($emptyStars);
    // };
    

    this.$el.appendTo('#activitiesListContainer');
  }


});