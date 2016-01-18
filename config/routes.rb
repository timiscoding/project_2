Rails.application.routes.draw do
  get 'members/index'

  resources :groups do
    resources :members
  end

  resources :feedbacks
  resources :tasks
  resources :activities
  resources :users

  root :to => 'session#new'

  get '/app' => 'pages#app'

  get '/users/edit' => 'users#edit'

  resources :users, :except => [:edit] do
    member { get :groups }
  end

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'
end
