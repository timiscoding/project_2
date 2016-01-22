var app = app || {};

app.MenuAvatarView = Backbone.View.extend({
  tagName: 'div',
  className: 'menuAvatar',

  render: function() {
    this.$el.html("<img src=" + app.current_user.avatar + ">")
    this.$el.append('<p class="largeEllipsedText greenBG topLeft">' + app.current_user.total_score + '</p>')

    // var templater = _.template( $('#memberListItemTemplate').html() );
    // var memberListItem = templater( this.model );
    // $('.menu').prepend( memberListItem );
    $('.menu').prepend(this.$el)
  }
});