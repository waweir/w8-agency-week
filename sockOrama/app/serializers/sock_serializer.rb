class SockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image, :featured
  has_one :color
  has_one :style
  has_one :category
  has_many :sizes

  def image
    Refile.attachment_url(object, :image, :fit, 50, 50, format: "jpg")
  end

end
