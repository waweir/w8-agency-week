class ChargesController < ApplicationController
  def new
  end

def create
  @cart = Cart.find_by(token: params(:token))
  @amount = @cart.total

  customer = Stripe::Customer.create(
    :email => params[:stripeEmail],
    :source  => params[:stripeToken]
  )

  charge = Stripe::Charge.create(
    :customer    => customer.id,
    :amount      => @amount,
    :description => 'Socks by John Boy',
    :currency    => 'usd'
  )

  @cart.order_complete
  render json: ["Successfully charged"]

rescue Stripe::CardError => e
  render json: [e.message], status: :unprocessable_entity
  redirect_to new_charge_path
end
end
