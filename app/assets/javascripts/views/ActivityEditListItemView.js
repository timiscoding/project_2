var app = app || {};

app.ActivityEditListItemView = Backbone.View.extend({
  tagName: 'div',
  events: {
  },

  save: function () {
    // $.ajax({
    //   url: "/tasks",
    //   method: "PUT",
    //   dataType: "JSON",
    //   data: { task: {
    //     user_id: selectedUser,
    //     activity_id: this.model.get('id'),
    //     due_date: $dateSelect,
    //     score: this.model.get('effort'),
    //     done: false
    //   }},
    //   success: function (data) {
    //     console.log(data);
    //   },
    //   error: function (data) {
    //     console.log('somethign went wrong');
    //   }
    // });
    console.log('anything!!')
    // console.log(this.model.get('id'));
  },

  render: function () {
    // Get the activityListItemTemplate from out app.html.erb
    var activityEditListItemTemplate = _.template($('#activityEditListItemTemplate').html());
    // this.$el = new <li>, inside pass in the activityListItemTemplate 
    // and use the data associated with the model passed in
    this.$el.html(activityEditListItemTemplate(this.model.toJSON()));
    // append the whole thing to the #activityListItem container
    
    var effort = this.model.get('effort');
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
    this.$el.appendTo('#activitiesEditListContainer');

  }

});