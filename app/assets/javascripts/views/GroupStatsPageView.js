var app = app || {};

app.GroupStatsPageView = Backbone.View.extend({
  el: '#main',

  render: function() {
    console.log("list")
    var templater = _.template( $('#groupStatsPageViewTemplate').html() );
    var groupStatsPageView = templater( this.model );
    this.$el.html( groupStatsPageView );
    // array of member
    var currentUserGroupId = app.memberList.toJSON().users;
    // array of member sorted by total_score
    currentUserGroupId = _.sortBy( currentUserGroupId, "total_score" ).reverse();
    // loop each member of the same group
    _( currentUserGroupId ).each(function ( user ) {
      var MemberListItemView = new app.MemberListItemView({ model: user });
      MemberListItemView.render();
    });
  }
});

