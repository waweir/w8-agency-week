class ChargesController < ApplicationController

  def new
  end

  def create
    # Amount in cents

    @amount = cart.total

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Sock-O-Rama!',
      :currency    => 'usd'
    )

    render json: ["successfully charged"]

  rescue Stripe::CardError => e
    render json: [e.message], status: :unprocessable_entity
  end

end
