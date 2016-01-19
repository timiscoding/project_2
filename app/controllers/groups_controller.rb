class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :edit, :update, :destroy]

  # GET /groups
  # GET /groups.json
  def index
    if @current_user.present? # if we're a user show only their groups
      @groups = @current_user.groups
    else # if we're admin, show all groups
      @groups = Group.all
    end
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
    # show the group members
    @group = Group.find params[:id]
    # @group_members = group.users
  end

  # GET /groups/new
  def new
    @group = Group.new
  end

  # GET /groups/1/edit
  def edit
  end

  # POST /groups
  # POST /groups.json
  def create
    @group = Group.new
    puts "group name #{ group_params[:name] }"
    @group.name = group_params[:name]

    respond_to do |format|
      if @group.save
        # set new members belonging to group
        group_params[:users].each do |user_id|
          user = User.find user_id
          puts "about to add to group #{ @group.id } user #{ user.id } #{ user.first_name }"
          @group.users << user
        end

        format.html { redirect_to @group, notice: 'Group was successfully created.' }
        format.json { render :show, status: :created, location: @group }
      else
        format.html { render :new }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    respond_to do |format|
      if @group.update(group_params)
        format.html { redirect_to @group, notice: 'Group was successfully updated.' }
        format.json { render :show, status: :ok, location: @group }
      else
        format.html { render :edit }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group.destroy
    respond_to do |format|
      format.html { redirect_to groups_url, notice: 'Group was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      @group = Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def group_params
      # params[:group][:users] ||=  [] # users is nil
      params.require(:group).permit(:name, users: [])
    end
end
