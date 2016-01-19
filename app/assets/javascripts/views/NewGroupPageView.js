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
    var user_ids = [ app.current_user.id ];
    $('#newMemberList').find('li').each(function(index, el){
      var $member = $(el).find('span');
      var user_id = parseInt($member.attr('id'));
      user_ids.push(user_id);
    });
    app.current_user.groups.create({ group: { name: $('#groupName').val(), users: user_ids } });
  },

  addMemberOnEnter: function(e) {
    if (e.which === app.ENTER_KEY){
      this.addMember();
    }
  },

  addMember: function() {
    var emailInput = $('#newMemberInput').val().trim();
    this.$('#error').empty();
    $.ajax('/users/search', {
      data: {
        q: emailInput
      },
      dataType: 'json',
      context: this
    }).done(function(user) {
      if (user.exists) {
        $('#newMemberInput').val('');
        var newGroupAddMemberView = new app.NewGroupAddMemberView({ attributes: { email: emailInput, user_id: user.user_id } });
        newGroupAddMemberView.render();
      } else {
        this.$('#newMemberList').focus();
        this.$('#error').html("user doesn't exist");
      }
    });
  }
});