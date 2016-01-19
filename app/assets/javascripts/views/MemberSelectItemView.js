var app = app || {};

app.MemberSelectItemView = Backbone.View.extend({
  tagName: 'button',
  className: 'button button-outline memberSelector',

  events: {
    'click': 'select'
  },

  select: function(){
    $('.memberSelector').addClass('button button-outline');
    this.$el.toggleClass('button');
    this.$el.toggleClass('button-outline');
    this.$el.blur();
    selectedUser = this.model.id
  },

  render: function () {
     this.$el.html(this.model.first_name);
     this.$el.appendTo('#memberSelectContainer')
  }

});