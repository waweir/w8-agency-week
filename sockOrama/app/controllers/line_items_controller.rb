class LineItemsController < ApplicationController

  def create
    if params[:token]
      @line_item = LineItem.new(
        size_id:      params[:size_id],
        num_ordered:  params[:num_ordered],
        cart:         Cart.where(token: params[:token]).first
        )
    else
      @line_item = LineItem.new(
        size_id:      params[:size_id],
        num_ordered:  params[:num_ordered],
        cart:         Cart.new
      )
    end
    if @line_item.save
      @line_item.size.instock -= @line_item.num_ordered
      render json: @line_item.cart, include: ['line_items.size, line_items.sock, line_items.sock.color, line_items.sock.style, line_items.sock.category']
    else
      render json: @line_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def check_stock(@line_item)
    if @line_item.num_ordered >= @line_item.size.in_stock
      render json: "Not enough in stock!"
    end
  end

  # def update
  #   @line_item = LineItem.find(params :id)
  #   @line_item.
  # end

  def destroy
    @line_item = LineItem.find(params :id)
    @line_item.destroy!
    render json: 'Item removed!'
  end

  def line_item_price
    size_price = Sock.find(sock_id).price
    size_price * :num_ordered
  end

end
