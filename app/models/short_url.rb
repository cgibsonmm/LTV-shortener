require 'open-uri'
class ShortUrl < ApplicationRecord
  # Decided to move the logic around converting ID and Decoding ID out of model
  include IdParser
  after_create :enqueue_update_title

  # struggled for awhile to decide what to do until I saw this.
  # CHARACTERS = [*'0'..'9', *'a'..'z', *'A'..'Z'].freeze
  validates :full_url, presence: true
  validate :validate_full_url

  def short_code
    return nil unless id

    convert_id(id)
  end

  # I am guessing that this was not meant to run as a background job, due to testing not calling reload?
  # After doing some more research I realized I could / should call this method from the job.
  # TODO: make this more robust
  def update_title!
    doc = Nokogiri::HTML(URI.open(full_url))
    title = doc.at_css('title').text
    update!(title: title)
  end

  def public_attributes
    slice('short_code', 'full_url', 'title', 'click_count')
  end

  def self.find_by_short_code(code)
    find(decode_id(code))
  end
  # scope :find_by_short_code, ->(code) { where('id', decode_id(code)).first }

  scope :top100, -> { order('click_count DESC').limit(100) }

  private

  def enqueue_update_title
    UpdateTitleJob.perform_later(id)
  end

  def validate_full_url
    # This is a not perfect solution looks to brittle and would not work on URL such as https://https://www.foo.org
    # inspiration from https://stackoverflow.com/questions/35468284/ruby-rails-model-url-validation
    uri = URI::DEFAULT_PARSER.make_regexp(%w[http https])
    errors.add :full_url, :invalid, message: 'is not a valid url' unless uri.match(full_url)

    # I would also consider using open-uri. Chris Oliver talks of this approach
    # which I like but I think it would
    # defeat the purpose of using the background job to find the title later
    # https://gorails.com/forum/best-way-to-validate-url
  end
end
