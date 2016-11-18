class LineItemSerializer < ActiveModel::Serializer
  attributes :num_ordered, :sock
  has_one :size
  has_one :sock
  has_one :cart
end
