class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart
  has_one :sock, through: :size
end
