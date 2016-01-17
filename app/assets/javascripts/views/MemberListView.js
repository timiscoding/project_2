var app = app || {};

app.MemberListView = Backbone.View.extend({
  tagName: 'div',
  id: 'group-members',

  initialize: function(){
    console.log('render memberlistview', app.current_user.id);

    var mygroups = new app.Groups(null, { user_id: app.current_user.id });
    mygroups.fetch() // get all groups for current_user
      .done(function(){
        // HARD CODED get the first group user belongs in
        var mygroup = new app.Group(null, { group_id: mygroups.first().id });
        mygroup.fetch() // get group name, not neccessary but it's available
          .done(function(){
            console.log( 'getting first group ', mygroup.get('name'), ' for user ', app.current_user.first_name );
          });
        mygroup.members.fetch() // get the members that belong to the first group for current_user
            .done(function() {
              console.log(mygroup.members.toJSON());
              mygroup.members.each(function(member){
                var memberView = new app.MemberView({ model: member });
                $('#members').append( memberView.render().el );
              });
            });
    });
    this.$el.append($('#members-template').html());
    // by returning the view, we can insert this member
    // list into any outer view by doing
    // outerView.append( memberListView.el )
    return this;
  }
});