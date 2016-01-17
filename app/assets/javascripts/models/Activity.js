var app = app || {};

app.Activity = Backbone.Model.extend({
  urlRoot: '/activities',
  defaults: {
    title: "",
    effort: "1"
  },

  initialize: function () {
  }

}); 