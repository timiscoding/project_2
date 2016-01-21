class User < ActiveRecord::Base
  has_and_belongs_to_many :groups
  has_many :activities
  has_many :tasks
  has_many :feedbacks
  has_secure_password
  validates :email, :presence => true, :uniqueness => true
  validates :first_name, :presence => true, :length => { :minimum => 2 }
  validates :last_name, :presence => true, :length => { :minimum => 2 }

  def avatar
    "https://robohash.org/#{first_name}.png"
  end
end
