NetzkeTaskManager::Application.routes.draw do
  get "/forgot", to: 'welcome#forgot'
  get "/change", to: 'welcome#change_pass'
  post "/login", to: 'welcome#login'

  netzke
  root :to => 'welcome#index'
end
