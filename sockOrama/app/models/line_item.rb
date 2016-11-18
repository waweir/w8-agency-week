class LineItem < ApplicationRecord
  belongs_to :size
  belongs_to :cart
  has_one :sock, through: :size
  before_save :change_stock, on: [:create, :update]



protected

  def change_stock
    @size = size
    if num_ordered_changed?
      @change = (num_ordered_change[0]) - (num_ordered_change[1])
      @size.in_stock = (size.in_stock + @change)
      @size.save
    else
      @size.in_stock = (size.in_stock - num_ordered)
    end
    if @size.in_stock >= 1
      @size.save
    else
      @size.rollback!
      render json: "Cannot order more than available stock!"
    end
  end

end
