Rails.application.routes.draw do
  resources :groups do
    member do
      put '/add/:user_id' => 'groups#add'
      patch '/add/:user_id' => 'groups#add'
    end
  end

  resources :feedbacks
  resources :tasks
  resources :activities
  resources :users do
    collection { get :search }
    member { get :groups }
    member { get :feedbacks }
  end

  root :to => 'session#new'

  get '/app' => 'pages#app'

  # get '/users/edit' => 'users#edit'

  # resources :users, :except => [:edit]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'
end
