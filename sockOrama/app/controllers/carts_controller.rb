class CartsController < ApplicationController

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: [@cart.line_items, subtotal: @cart.subtotal, tax: @cart.tax, shipping: @cart.shipping, total: @cart.total]
  end

  def update
    @cart = Cart.find_by(token: params[:token]),
    @cart.ship_to_address = params[:ship_to_address],
    @cart.email = params[:email],
    @cart.customer = params[:customer]
    render json: @cart
  end

  def destroy
    @cart = Cart.find_by(token: params[:token])
    @cart.line_items.destroy!
  end

end
