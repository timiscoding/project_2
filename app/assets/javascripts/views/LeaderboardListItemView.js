var app = app || {};

app.LeaderboardListItemView = Backbone.View.extend({
  tagName: 'li',
//populate "li" with member of the same group through LeaderboardPageView
  render: function() {
    var templater = _.template( $('#LeaderboardListItemViewTemplate').html() );
    var LeaderboardListItemView = templater( this.model );
    $('#leaderList').append( LeaderboardListItemView  );
  }
});