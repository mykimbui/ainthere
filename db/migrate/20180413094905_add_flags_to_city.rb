class AddFlagsToCity < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :flag, :string
  end
end
