var app = app || {};

app.MemberListItemView = Backbone.View.extend({
  tagName: 'li',

  render: function() {
    var templater = _.template( $('#memberListItemTemplate').html() );
    var memberListItem = templater( this.model );
    $('#memberList').append( memberListItem );
  }
});