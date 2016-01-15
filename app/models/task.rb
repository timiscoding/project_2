class Task < ActiveRecord::Base
  belongs_to :activity
  belongs_to :user
  has_many :feedbacks
end
