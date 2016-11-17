class CartsController < ApplicationController

  # def create
  #   @cart = Cart.new(cart_params)
  #   if @cart.save
  #     render json: @cart
  #   else
  #     render json: @cart.errors.full_messages, status: :unprocessable_entity
  #   end
  # end

  def show
    @cart = Cart.find_by(token: params[:token])
    render json: [@cart.line_items, @cart.subtotal]
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
