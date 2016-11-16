class SetBooleanDefault < ActiveRecord::Migration[5.0]
  def change
    change_column :socks, :featured, :boolean, null: false, default: false
  end
end
