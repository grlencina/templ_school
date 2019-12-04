class AddCategoryToJobs < ActiveRecord::Migration[6.0]
  def change
    add_reference :jobs, :category, null: false, foreign_key: true
  end
end
