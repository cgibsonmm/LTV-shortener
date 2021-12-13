module IdParser
  CHARACTERS = [*'0'..'9', *'a'..'z', *'A'..'Z'].freeze
  def convert_id(id)
    return 0 if id == 0

    converted = []
    while id > 0
      rem = id % 62
      converted << CHARACTERS[rem]
      id = (id / 62).floor
    end
    converted.join('')
  end

  def decode_id(id); end
end
