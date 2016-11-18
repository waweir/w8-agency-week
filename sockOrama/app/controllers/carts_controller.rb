class CartsController < ApplicationController

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: @cart, include: ['line_items.size, line_items.sock, line_items.sock.color, line_items.sock.style, line_items.sock.category']
  end

  def update
    @cart = Cart.find_by(token: params[:token])
    if @cart.complete
      render json: ['Cannot add to completed order!']
    else
      @cart.update! (cart_params)
    end
    if @cart.save
      render json: @cart, include: ['line_items.size, line_items.sock, line_items.sock.color, line_items.sock.style, line_items.sock.category']
    else
      render json: @cart.errors
    end
  end

  def destroy
    @cart = Cart.find_by(token: params[:token])
    @cart.line_items.destroy!
  end

  private

  def cart_params
    params.permit(:ship_to_address, :customer, :email, :token, :complete)
  end

end
