class SocksController < ApplicationController

  def index
    @socks = Sock.all
    render json: @socks
  end

  def static
  end

  def filter
    @socks = Sock.all
    if params[:search]
      @socks = @socks.search_full_text(params[:search])
    end
    if params[:filter]
      @socks = @socks.ransack(params[:filter]).result
    end
    # @socks = @socks.to_a.uniq
    render json: @socks, include: ['sizes']
  end

  def create
    @sock = Sock.new(sock_params)
    if @sock.save
      render json: @sock
    else
      render json: @sock.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @sock = Sock.find(params[:id])
    render json: @sock
  end

private

  def sock_params
    params.permit(:name, :primary_color, :style, :size, :price, :material, :category)
  end

end
