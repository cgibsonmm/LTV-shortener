class ShortUrlsController < ApplicationController
  # Since we're working on an API, we don't have authenticity tokens
  skip_before_action :verify_authenticity_token

  def index; end

  def create
    @short_url = ShortUrl.new(create_params)

    if @short_url.save
      UpdateTitleJob.perform_later(@short_url.id)
      render json: { short_code: @short_url.short_code }, status: :created
    else
      render json: { errors: @short_url.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show; end

  private

  def create_params
    params.permit(:full_url)
  end
end
