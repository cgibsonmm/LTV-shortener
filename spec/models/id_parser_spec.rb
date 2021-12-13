require 'rails_helper'
include IdParser

RSpec.describe IdParser do
  it 'creates a short url' do
    expect(convert_id(0)).to eq(0)
    expect(convert_id(1)).to eq('1')
    expect(convert_id(98)).to eq('A1')
  end
end
