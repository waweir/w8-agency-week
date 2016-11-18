class CartsController < ApplicationController

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: [@cart.line_items, token: @cart.token, subtotal: @cart.subtotal, tax: @cart.tax, shipping: @cart.shipping, total: @cart.total], include: ['size']
  end

  def update
    @cart = Cart.find_by(token: params[:token])
    if @cart.complete
      render json: ['Cannot add to completed order!']
    else
      @cart.update! (cart_params)
    end
    if @cart.save
      render json: [@cart.line_items, token: @cart.token, subtotal: @cart.subtotal, tax: @cart.tax, shipping: @cart.shipping, total: @cart.total]
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
