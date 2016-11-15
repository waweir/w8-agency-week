class RemoveSizeFromSocks < ActiveRecord::Migration[5.0]
  def change
    remove_column :socks, :size
  end
end
