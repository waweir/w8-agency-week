class CreateSizes < ActiveRecord::Migration[5.0]
  def change
    create_table :sizes do |t|
      t.references :sock, foreign_key: true
      t.integer :in_stock

      t.timestamps
    end
  end
end
