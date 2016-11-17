class CartsController < ApplicationController

  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render json: @cart
    else
      render json: @cart.errors.full_messages, status: :unprocessable_entity
    end
  end

  

private

  def cart_params
    params.permit(:email, :customer, :line_items)
  end

end
