class CreateLineItems < ActiveRecord::Migration[5.0]
  def change
    create_table :line_items do |t|
      t.references :size, foreign_key: true
      t.references :cart, foreign_key: true
      t.integer :num_ordered

      t.timestamps
    end
  end
end
