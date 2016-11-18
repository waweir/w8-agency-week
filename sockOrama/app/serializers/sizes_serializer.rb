class SizesSerializer < ActiveModel::Serializer
  attributes :abbr, :in_stock, :sock_id
  has_one :sock
  has_many :sizes
end
