Rails.application.routes.draw do
  resources :groups

  resources :feedbacks
  resources :tasks
  resources :activities
  resources :users do
    collection { get :search }
  end

  root :to => 'session#new'

  get '/app' => 'pages#app'

  # get '/users/edit' => 'users#edit'

  # resources :users, :except => [:edit]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'
end
