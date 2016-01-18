var app = app || {};

app.MemberView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    // console.log('memberview ', this.model.get('first_name') );
    this.$el.append( this.model.get('first_name') + ' ' + this.model.get('total_score') );
    return this;
  }
});