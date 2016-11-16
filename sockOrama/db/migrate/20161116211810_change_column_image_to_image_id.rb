class ChangeColumnImageToImageId < ActiveRecord::Migration[5.0]
  def change
    rename_column :socks, :image, :image_id
  end
end
