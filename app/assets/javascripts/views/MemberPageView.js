var app = app || {};

app.MemberPageView = Backbone.View.extend({
  el: '#main',

  render: function() {
    this.$el.append( $('#memberPageViewTemplate').html() );

    _( this.model.get('users') ).each( function(member) {
      var memberListItemView = new app.MemberListItemView({ model: member });
      memberListItemView.render();
    });
  }
});