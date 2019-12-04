class User < ApplicationRecord
  has_many :conversations
  has_many :jobs

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def applied_to?(job)
    conversations.map(&:job).include? job
  end
end
