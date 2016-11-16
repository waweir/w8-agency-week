Rails.application.routes.draw do
  root 'socks#static'
  resources :charges, only: [:create]
  resources :carts
  resources :socks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
