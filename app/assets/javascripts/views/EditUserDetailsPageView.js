var app = app || {};

app.EditUserDetailsPageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click .editButton' : 'saveEdit'
  },

  render: function () {
    
    var EditUserDetailsPageViewTemplate = _.template($('#EditUserDetailsPageViewTemplate').html());
    this.$el.append(EditUserDetailsPageViewTemplate);
    
  },

  saveEdit: function (e) { //e= normal event when form is submitting
    e.preventDefault();
    //prefill the different data from current_user
    app.current_user.first_name = $("#first_name").val();
    app.current_user.last_name = $("#last_name").val();
    app.current_user.phone = $("#phone").val();
    app.current_user.email = $("#email").val();
    app.current_user.password = $("#password").val();
    app.current_user.password_confirmation = $("#password_confirmation").val();
    app.current_user.avatar = $("#avatarVal").val();

//bug in the ajax request, I had to do in through Backbone
    var user = new app.User(app.current_user);
    user.save({
      success: function (data) {
        console.log( data ); // check the user data is updated
        $("body").prepend("USER WAS SUCCESSFULLY UPDATED");
      },
      error: function (data) {
        data = JSON.parse( data.responseText );

        $("#error").prepend( data.password_confirmation );
      }

    });
    app.router.navigate("/#", true)

//DOES NOT WORK ANYMORE
    // $.ajax({
    //   url: "/users/" + app.current_user.id, //request to the user/:id url
    //   method: "PUT",  // type of request given by info routes
    //   dataType: "JSON", // to mke sure the data is send/request as Json
    //   data: {
    //     user: app.current_user
    //   },
    //   success: function (data) {
    //     console.log( data ); // check the user data is updated
    //     $("body").prepend("USER WAS SUCCESSFULLY UPDATED");
    //   },
    //   error: function (data) {
    //     data = JSON.parse( data.responseText );

    //     $("#error").prepend( data.password_confirmation );
    //   }
    // })
    // app.current_user.save();
  }

});