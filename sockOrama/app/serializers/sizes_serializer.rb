class SizesSerializer < ActiveModel::Serializer
  attributes :abbr, :in_stock, :sock_id
  belongs_to :sock
  has_many :sizes
end
