var app = app || {};

app.MenuAvatarView = Backbone.View.extend({
  tagName: 'div',
  className: 'menuAvatar',

  initialize: function(){
    this.listenTo(this.model, 'change:total_score', this.updateScore);
  },

  render: function() {
    this.$el.html("<img src=" + this.model.get('avatar') + ">")
    this.$el.append('<p class="largeEllipsedText greenBG topLeft">' + this.model.get('total_score') + '</p>')

    // var templater = _.template( $('#memberListItemTemplate').html() );
    // var memberListItem = templater( this.model );
    // $('.menu').prepend( memberListItem );
    $('.menu').prepend(this.$el);
  },

  updateScore: function() {
    $('.menuAvatar').find('.largeEllipsedText').text(this.model.get('total_score'));
  }
});