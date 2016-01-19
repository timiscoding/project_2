var app = app || {};

app.NewGroupAddMemberView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click a': 'clear'
  },

  render: function() {
    // console.log('addEmail,', this.attributes);
    this.$el
      .append( $('<span>').attr('id', this.attributes.user_id).append(this.attributes.email) )
      .append('<a href="#">Remove</a>');
    this.$el.appendTo('#newMemberList');
  },

  clear: function(e) {
    e.preventDefault();
    // console.log('removing member');
    this.remove();
  }
});