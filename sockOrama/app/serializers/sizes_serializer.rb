class SizesSerializer < ActiveModel::Serializer
  attributes :abbr, :in_stock, :sock
  has_one :sock
  has_one :color, through: :sock
  has_one :style, through: :sock
  has_one :category, through: :sock
end
