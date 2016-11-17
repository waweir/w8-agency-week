class Sock < ApplicationRecord
  include PgSearch
  has_many :sizes
  belongs_to :color
  belongs_to :style
  belongs_to :category

  attachment :image

  scope :featured, -> { where(featured: true) }


  pg_search_scope :search_full_text, :against => [
      [:name, 'A'],
      [:category, 'B'],
      :color,
      :style
    ]

end
