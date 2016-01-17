class MembersController < ApplicationController
  def index
    group = Group.find params[:group_id]
    @members = group.users
  end
end
