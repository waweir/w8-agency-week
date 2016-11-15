class Sock < ApplicationRecord
  belongs_to :color
  belongs_to :style
  belongs_to :category
  belongs_to :line_items
end
