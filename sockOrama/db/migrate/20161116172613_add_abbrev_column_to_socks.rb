class AddAbbrevColumnToSocks < ActiveRecord::Migration[5.0]
  def change
    add_column :sizes, :abbr, :string
  end
end
