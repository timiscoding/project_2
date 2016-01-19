var app = app || {};

app.MemberSelectItemView = Backbone.View.extend({
  tagName: 'button',
  className: 'button button-outline',

  events: {
    'click': 'select'
  },

  select: function(){
    // $(this).toggleClass('button');
    this.$el.toggleClass('button');
    this.$el.toggleClass('button-outline')

    console.log(this.model.id)
  },

  render: function () {
     this.$el.html(this.model.first_name);
     this.$el.appendTo('#memberSelectContainer')
  }

});