var app = app || {};

app.NewGroupPageView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #addGroup': 'addGroup',
    'click #addMember': 'addMember'
  },

  initialize: function() {
    this.view = this;
  },

  render: function() {
    this.$el.html( $('#newGroupPageViewTemplate').html() );

  },

  addGroup: function() {
    console.log('next clicked ', $('#groupName').val());
    var newGroup = new app.Group();
    newGroup.set({ name: $('#groupName').val() });
    newGroup.save();

  },

  addMember: function() {
    console.log('addMember clicked', this);
    var emailInput = $('#newMember').val().trim();
    this.$('#error').empty();
    $.ajax('/users/search', {
      data: {
        q: emailInput
      },
      dataType: 'json',
      context: this
    }).done(function(searchResult) {
      if (searchResult.status) {
        console.log('email found!', newMember);
        var newGroupAddMemberView = new app.NewGroupAddMemberView({ attributes: { email: emailInput } });
        newGroupAddMemberView.render();
      } else {
        console.log('invalid email', this);
        this.$('#newMemberList').focus();
        this.$('#error').html('invalid email');
      }
    });

  }
});