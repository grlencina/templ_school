Rails.application.routes.draw do
  devise_for :users
  resources :jobs do
    member do
      post :apply
    end
  end
  resources :messages, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  root to: "jobs#index"
end
