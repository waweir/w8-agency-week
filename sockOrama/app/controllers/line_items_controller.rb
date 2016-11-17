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
      render json: @line_item, include: 'size.sock'
    else
      render json: @line_item.errors.full_messages, status: :unprocessable_entity
    end

  end


  def line_item_price
    size_price = Sock.find(sock_id).price
    size_price * :num_ordered
  end

end
