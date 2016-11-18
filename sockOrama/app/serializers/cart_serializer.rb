class CartSerializer < ActiveModel::Serializer
  attributes :token, :complete, :subtotal, :tax, :shipping, :total, :ship_to_address, :email, :customer, :line_items
  has_many :line_items
end
