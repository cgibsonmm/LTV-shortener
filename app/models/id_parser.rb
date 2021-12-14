# Influenced by https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener
# and https://medium.com/@harpermaddox/how-to-build-a-custom-url-shortener-5e8b454c58ae
# decided to use a PORO felt that it allowed for a little more flexibility and in not coupled to rails
module IdParser
  CHARACTERS = [*'0'..'9', *'a'..'z', *'A'..'Z'].freeze

  # Converts an ID into a base 62 number

  def convert_id(id)
    return 0 if id == 0

    result = ''
    while id > 0
      reminder = id % 62
      result.prepend(CHARACTERS[reminder])
      id = (id / 62).floor
    end
    result
  end

  def decode_id(id)
    chars = id.to_s.split('')
    count = chars.map do |item|
      CHARACTERS.index(item)
    end

    base_10 = 0
    digit = 0

    count.reverse.each do |int|
      base_10 += int * (62**digit)
      digit += 1
    end
    base_10
  end
end
