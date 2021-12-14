require 'rails_helper'
include IdParser

RSpec.describe IdParser do
  context 'convert_id' do
    it 'creates a short url' do
      expect(convert_id(0)).to eq(0)
      expect(convert_id(1)).to eq('1')
      expect(convert_id(185)).to eq('Z2')
    end
  end

  context 'decode_id' do
    it 'decodes the base 62 into a base 10' do
      expect(decode_id(0)).to eq(0)
      expect(decode_id('1')).to eq(1)
      expect(decode_id('Z2')).to eq(185)
    end
  end
end
