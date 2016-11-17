Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'socks#static'
  resources :charges, only: [:create]
  resources :carts
  post '/add_to_cart' => 'line_items#create'
  get '/view_cart' => 'carts#show'
  resources :socks do
    collection do
      get :filter
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
