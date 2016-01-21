var app = app || {};

app.MemberSelectItemView = Backbone.View.extend({
  tagName: 'button',
  className: 'button button-outline memberSelector',

  events: {
    'click #saveTask': 'saveTask',
    'click': 'select'
    
  },

  select: function(){
    $('.memberSelector').addClass('button button-outline');
    this.$el.toggleClass('button');
    this.$el.toggleClass('button-outline');
    $("#memberSelectContainer").attr("user_id", this.model.id);
    this.$el.blur();
  },

  render: function () {
     this.$el.html(this.model.first_name);
     this.$el.appendTo('#memberSelectContainer')
  },

  saveTask: function () {
    console.log("task saved")
  }

});