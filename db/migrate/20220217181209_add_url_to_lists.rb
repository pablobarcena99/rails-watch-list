class AddUrlToLists < ActiveRecord::Migration[6.1]
  def change
    add_column :lists, :url, :string
  end
end
