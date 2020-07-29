class Country < ApplicationRecord
  has_many :places
  has_one_attached :image

end
