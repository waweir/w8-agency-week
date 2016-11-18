class SetNumOrderDefaultInLineItem < ActiveRecord::Migration[5.0]
  def change
    change_column :line_items, :num_ordered, :integer, :default => 0
  end
end
