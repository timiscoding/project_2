class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/app#tasklist'
    else
      flash[:error] = 'Invalid login'
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil # Forget the user_id, and so log them out.
    redirect_to root_path
  end
end