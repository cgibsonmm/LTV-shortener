require 'open-uri'
class UpdateTitleJob < ApplicationJob
  queue_as :default

  def perform(short_url_id)
    @short_url = ShortUrl.find(short_url_id)

    # open the HTML DOC
    doc = Nokogiri::HTML(URI.open(@short_url.full_url))
    title = doc.at_css('title').text
    @short_url.update!(title: title)
  end
end
