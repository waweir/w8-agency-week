class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.references :sock, index:true
      t.string :size

      t.timestamps
    end
  end
end
