class AddScoreToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :score, :integer
  end
end
