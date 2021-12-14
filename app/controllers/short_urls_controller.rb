class ShortUrlsController < ApplicationController
  before_action :find_short_url, only: [:show]
  # Since we're working on an API, we don't have authenticity tokens
  skip_before_action :verify_authenticity_token

  def index
    @urls = ShortUrl.all.order('click_count DESC').limit(100)
  end

  def create
    @short_url = ShortUrl.new(create_params)

    if @short_url.save
      UpdateTitleJob.perform_later(@short_url.id)
      render json: { short_code: @short_url.short_code }, status: :created
    else
      render json: { errors: @short_url.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    if @short_url.update!(click_count: @short_url.click_count + 1)
      redirect_to @short_url.full_url
    else
      render json: { errors: @short_url.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def create_params
    params.permit(:full_url)
  end

  def find_short_url
    @short_url = ShortUrl.find_by_short_code(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { errors: 'URL not found' }, status: :not_found
  end
end
