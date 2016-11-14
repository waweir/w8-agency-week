class CreateSocks < ActiveRecord::Migration[5.0]
  def change
    create_table :socks do |t|
      t.string :name
      t.string :primary_color
      t.string :style
      t.string :size
      t.text :description
      t.integer :price
      t.string :material

      t.timestamps
    end
  end
end
