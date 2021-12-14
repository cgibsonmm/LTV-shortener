class ShortUrlsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  before_action :find_short_url, only: [:show]

  # Since we're working on an API, we don't have authenticity tokens
  skip_before_action :verify_authenticity_token

  def index
    @urls = ShortUrl.top100
  end

  def create
    ShortUrl.create!(create_params)
    render :show
  end

  def show
    @short_url.update!(click_count: @short_url.click_count + 1)
    redirect_to @short_url.full_url
  end

  private

  def create_params
    params.permit(:full_url)
  end

  def find_short_url
    @short_url = ShortUrl.find_by_short_code(params[:id])
  end

  def record_not_found(error)
    render json: { errors: error.full_message }, status: :not_found
  end

  def record_invalid(error)
    render json: { errors: error.full_message }, status: :unprocessable_entity
  end
end
