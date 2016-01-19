var app = app || {};

// creates a new option element in a dropdown populated with all the groups
app.NewGroupListItemView = Backbone.View.extend({
  tagName: 'option',

  render: function() {
    this.$el.attr( 'value', this.model.get('id') ).append( this.model.get('name') );
    return this;
  }
});