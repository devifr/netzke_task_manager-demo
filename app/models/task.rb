class Task < ActiveRecord::Base
  attr_accessible :done, :due, :name, :notes, :priority, :user_id
  validates_presence_of :name
  belongs_to :user
end
