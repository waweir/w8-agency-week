class Cart < ApplicationRecord
  has_secure_token :token
  has_many :line_items
  has_many :sizes, through: :line_items
  has_many :socks, through: :sizes

  def subtotal

    line_items.collect { |li| li.valid? ? (li.num_ordered * li.size.sock.price) : 0 }.sum

    # quantity << line_items.each do |line_item|
    #   line_item.num_ordered
    # end
    # puts quantity
    #
    # price_per << line_items.each do |line_item|
    #   line_item.size.sock.price
    # end
    # puts price_per
    #
    # quantity.reduce(:+) * price_per.reduce(:+)

  end

  def tax
    subtotal * 0.06
  end

  def shipping
    line_items.collect { |li| li.valid? ? li.num_ordered : 0}.sum * 200
  end

  def total
    subtotal + tax + shipping
  end

end
