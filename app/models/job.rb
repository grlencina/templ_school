class Job < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :conversations, dependent: :destroy

  validates :description, :title, presence: true
end
