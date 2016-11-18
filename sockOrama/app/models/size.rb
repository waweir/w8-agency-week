class Size < ApplicationRecord
  include ActiveModel::Dirty
  belongs_to :sock
  has_many :line_items

end
