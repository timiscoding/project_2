class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.integer :user_id
      t.integer :task_id
      t.integer :rating

      t.timestamps null: false
    end
  end
end
