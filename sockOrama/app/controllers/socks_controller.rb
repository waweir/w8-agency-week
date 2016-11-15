class SocksController < ApplicationController

  def index
    @socks = Sock.all
    render json: @socks
  end

  def create
    @sock = Sock.new(params: [:name, :primary_color, :style, :size, :price, :material, :category])
    if @sock.save
      render json: @sock
    else
      render json: @sock.errors
    end
  end

  def show
    @sock = Sock.find
    render json: @sock
  end

end
