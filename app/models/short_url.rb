class ShortUrl < ApplicationRecord
  # Decided to move the logic around converting ID and Decoding ID out of model
  include IdParser

  # struggled for awhile to decide what to do until I saw this.
  # CHARACTERS = [*'0'..'9', *'a'..'z', *'A'..'Z'].freeze
  validates :full_url, presence: true
  validate :validate_full_url

  def short_code
    return nil unless id

    convert_id(id)
  end

  def update_title!; end

  scope :find_by_short_code, ->(code) { where('id', decode_id(code)).first }

  private

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
