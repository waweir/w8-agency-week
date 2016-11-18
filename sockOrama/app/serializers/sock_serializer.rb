class SockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image, :featured, :color, :style, :category
  has_one :color
  has_one :style
  has_one :category
  has_many :sizes
  has_many :line_items, through: :sizes

  def image
    Refile.attachment_url(object, :image, :fit, 200, 200, format: "jpg")
  end

end
