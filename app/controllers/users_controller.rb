class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @current_user = User.new(user_params)

    respond_to do |format|
      if @current_user.save
        format.html do
          session[:user_id] = @current_user.id
          redirect_to app_path + '/#newgroup'
        end
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render json: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def search
    query = params[:q]
    @user = User.find_by :email => query
    respond_to do |format|
      if @user.present?
        format.html { redirect_to @user }
        format.json { render :json => { exists: true, user_id: @user.id } }
      else
        format.html { render :text => "no result" }
        format.json { render :json => { exists: false } }
      end
    end
  end

  # /users/:id/feedbacks
  def feedbacks
    this_user = User.find params[:id]
    # get feedback for all tasks assigned to this user who has marked them as done
    unless this_user.nil?
      @feedbacks = Feedback.select do |f|
        # puts "title #{ f.task.activity.title } #{ f.task.user.id } #{ this_user.id } #{ f.task.done }"
        f.task.user.id == this_user.id && f.task.done == true
      end
    end
  end

  def groups
    if @current_user.present? # && @current_user.id == params[:id] # logged in users can only view their groups
        @groups = @current_user.groups
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation, :email, :phone, :total_score)
    end
end
