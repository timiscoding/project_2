var app = app || {};

app.MemberListView = Backbone.View.extend({
  tagName: 'div',
  id: 'group-members',

  initialize: function(){
    console.log('render memberlistview', app.current_user.id);

    var mygroups = new app.Groups(null, { user_id: app.current_user.id });
    mygroups.fetch()
      .done(function(){
        // HARD CODED get first group user belongs in
        console.log('mygroups - first ', mygroups.first().id);
        var mygroup = new app.Group({id: mygroups.first().id});
        mygroup.members.fetch()
          .done(function() {
            console.log(mygroup.members.toJSON());
          });
    });
    this.$el.append($('#members-template').html());
    // by returning the view, we can insert this member
    // list into any outer view by doing
    // outerView.append( memberListView.el )
    return this;
  }
});