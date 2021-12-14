require 'rails_helper'

RSpec.describe IdParser do
  context 'convert_id' do
    it 'creates a short url' do
      expect(IdParser.convert_id(0)).to eq(0)
      expect(IdParser.convert_id(1)).to eq('1')
      expect(IdParser.convert_id(185)).to eq('2Z')
    end
  end

  context 'decode_id' do
    it 'decodes the base 62 into a base 10' do
      expect(IdParser.decode_id(0)).to eq(0)
      expect(IdParser.decode_id('1')).to eq(1)
      expect(IdParser.decode_id('2Z')).to eq(185)
    end
  end
end
