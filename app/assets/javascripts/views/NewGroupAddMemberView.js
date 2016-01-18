var app = app || {};

app.NewGroupAddMemberView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    console.log('addEmail,', this.attributes);
    this.$el.append(this.attributes.email);
    this.$el.appendTo('#newMemberList');
  }
});