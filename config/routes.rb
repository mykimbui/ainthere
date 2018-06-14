Rails.application.routes.draw do
  get 'cities/index'
  get "/about" => "cities#about"

  root to: 'cities#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
