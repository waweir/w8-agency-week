class Sock < ApplicationRecord
  attachment :image
  has_many :items
end
