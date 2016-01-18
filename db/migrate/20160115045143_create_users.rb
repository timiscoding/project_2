class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :email
      t.string :phone
      t.integer :total_score, :default => 0

      t.timestamps null: false
    end
  end
end
