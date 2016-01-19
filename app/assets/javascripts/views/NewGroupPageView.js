var app = app || {};

app.NewGroupPageView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #addGroup': 'addGroup',
    'click #addMember': 'addMember',
    'keypress #newMemberInput': 'addMemberOnEnter'
  },

  render: function() {
    this.$el.html( $('#newGroupPageViewTemplate').html() );
  },

  addGroup: function() {
    var user_ids = [ app.current_user.id ]; // the users that will belong in this new group
    // extract user id from each list item and store in array
    $('#newMemberList').find('li').each(function(index, el){
      var $member = $(el).find('span');
      var user_id = parseInt($member.attr('id'));
      user_ids.push(user_id);
    });
    // create a new group in backbone and rails with group name and users data
    app.current_user.groups.create({ group: { name: $('#groupName').val(), users: user_ids } });
  },

  addMemberOnEnter: function(e) {
    if (e.which === app.ENTER_KEY){
      this.addMember();
    }
  },

  addMember: function() {
    var emailInput = $('#newMemberInput').val().trim();
    this.$('#error').empty(); // error message for invalid user email
    $.ajax('/users/search', { // asks the server if a user with emailInput exists
      data: {
        q: emailInput
      },
      dataType: 'json',
      context: this // jQuery replaces 'this' with settings object, so we need to save 'this' (ie. the view) for callback to access it
    }).done(function(user) {
      if (user.exists) {
        $('#newMemberInput').val('');
        // add user list item and pass in email and user id
        var newGroupAddMemberView = new app.NewGroupAddMemberView({ attributes: { email: emailInput, user_id: user.user_id } });
        newGroupAddMemberView.render();
      } else {
        this.$('#newMemberList').focus();
        this.$('#error').html("user doesn't exist");
      }
    });
  }
});