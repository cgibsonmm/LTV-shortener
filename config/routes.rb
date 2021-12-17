Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  require 'resque/server'
  mount Resque::Server, at: '/admin/jobs'

  resources :short_urls, only: %i[index create show]
  get '/' => 'short_urls#index', defaults: { format: :json }
  get '*id' => 'short_urls#show'
end
