class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :address, :email, :customer, :complete
  has_one :line_item
end
