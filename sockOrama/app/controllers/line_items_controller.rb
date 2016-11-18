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
      render json: @line_item.cart, include: ['line_items.size, line_items.sock, line_items.sock.color, line_items.sock.style, line_items.sock.category']
    else
      render json: @line_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @line_item = LineItem.find(params :id)
    @line_item.destroy!
    render json: 'Item removed!'
  end

end
