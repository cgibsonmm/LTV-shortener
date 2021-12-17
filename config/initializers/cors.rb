# should be modified in a production app to allow only listed URLs(if wanted)

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: %i[get post patch put]
  end
end
