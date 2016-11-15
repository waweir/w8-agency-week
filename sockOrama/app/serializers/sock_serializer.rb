class SockSerializer < ActiveModel::Serializer
  attributes :id, :name, :primary_color, :style, :size, :description, :price, :material
end
