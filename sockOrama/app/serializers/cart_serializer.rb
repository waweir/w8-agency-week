class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :ship_to_address, :email, :customer, :complete
  has_many :line_items
  # include: ''
end
