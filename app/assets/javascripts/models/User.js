var app = app || {};
// var urlAvatar = "https://robohash.org/" + app.current_user.first_name + ".png"

app.User = Backbone.Model.extend({
  urlRoot: '/users',
  // defaults: {
  //   avatar: urlAvatar;
  // },
  initialize: function (data) {
    var avatar = data.avatar || "https://robohash.org/" + this.get("first_name") + ".png";
    this.set("avatar", avatar);
  }
});