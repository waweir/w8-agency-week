class Cart < ApplicationRecord
  has_secure_token :token
  has_many :line_items
  has_many :sizes, through: :line_items
  has_many :socks, through: :sizes

  def subtotal

    line_items.collect { |li| (li.num_ordered * li.size.sock.price) }.sum

  end

  def tax
    (subtotal * 0.06).to_i
  end

  def shipping
    line_items.collect { |li| li.num_ordered }.sum * 200
  end

  def total
    subtotal + tax + shipping
  end

  def order_complete
    self.complete = true
  end

end
