class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.string :token
      t.string :address
      t.string :email
      t.string :customer
      t.boolean :complete
      t.references :line_item, index:true
      t.timestamps
    end
  end
end
