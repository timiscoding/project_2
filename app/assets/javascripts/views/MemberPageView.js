var app = app || {};

app.MemberPageView = Backbone.View.extend({
  el: '#memberListViewContainer',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html( $('#memberPageViewTemplate').html() );
    _( this.model.get('users') ).each( function(member) {
      var memberListItemView = new app.MemberListItemView({ model: member });
      memberListItemView.render();
    });
  }
});