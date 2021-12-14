class ShortUrl < ApplicationRecord
  # Decided to move the logic around converting ID and Decoding ID out of model
  include IdParser

  # struggled for awhile to decide what to do until I saw this.
  # CHARACTERS = [*'0'..'9', *'a'..'z', *'A'..'Z'].freeze

  validate :validate_full_url

  def short_code; end

  def update_title!; end

  private

  def validate_full_url; end
end
