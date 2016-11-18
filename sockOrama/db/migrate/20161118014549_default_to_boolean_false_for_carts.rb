class DefaultToBooleanFalseForCarts < ActiveRecord::Migration[5.0]
  def change
    change_column :carts, :complete, :boolean, null: false, default: false
  end
end
