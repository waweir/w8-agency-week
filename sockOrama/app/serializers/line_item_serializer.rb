class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :size_id, :cart_id, :num_ordered
end
