class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :title
      t.integer :effort
      t.integer :group_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
