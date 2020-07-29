class Place < ApplicationRecord
  belongs_to :country
  has_one_attached :image

end
