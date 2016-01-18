var app = app || {};

app.UserDetailsPageView = Backbone.View.extend({
  el: '#main',

  render: function () {
    
    var UserDetailsPageViewTemplate = _.template($('#UserDetailsPageViewTemplate').html());
    this.$el.append(UserDetailsPageViewTemplate);
    // ** note: change *append* to *html* later **
  }

});