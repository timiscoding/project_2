var app = app || {};

app.LeaderboardPageView = Backbone.View.extend({
  el: '#main',

  render: function() {
    
    var templater = _.template( $('#LeaderboardPageViewTemplate').html() );
    var LeaderboardPage = templater( this.model );
    this.$el.html( LeaderboardPage );
    // array of member
    var currentUserGroupId = app.memberList.toJSON().users;
    // array of member sorted by total_score
    currentUserGroupId = _.sortBy( currentUserGroupId, "total_score" ).reverse();
    // loop each member of the same group
    _( currentUserGroupId ).each(function ( user ) {
      var LeaderboardListItemView = new app.LeaderboardListItemView({ model: user });
      LeaderboardListItemView.render();
    });
  }
});