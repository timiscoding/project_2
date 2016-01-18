var app = app || {};

app.EditUserDetailsPageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click .editButton' : 'saveEdit'
  },

  render: function () {
    
    var EditUserDetailsPageViewTemplate = _.template($('#EditUserDetailsPageViewTemplate').html());
    this.$el.append(EditUserDetailsPageViewTemplate);
    // ** note: change *append* to *html* later **
  },

  saveEdit: function (e) {
    e.preventDefault();

    app.current_user.first_name = $("#first_name").val();
    app.current_user.last_name = $("#last_name").val();
    app.current_user.phone = $("#phone").val();

    $.ajax({
      url: "/users/" + app.current_user.id,
      method: "PUT",
      dataType: "JSON",
      data: {
        user: app.current_user
      },
      success: function (data) {
        console.log( data );
        $("body").prepend("USER WAS SUCCESSFULLY UPDATED");
      }
    })
    // app.current_user.save();
  }

});