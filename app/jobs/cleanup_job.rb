class CleanupJob < ApplicationJob
  queue_as :default

  after_perform  :re_enqueue

  def perform(*args)
    # Do something later
    Job.where("created_at <= ?", Time.now - 30.days).destroy_all
  end

  private
    def re_enqueue
      CleanupJob.set(wait_until: Date.tomorrow.at_beginning_of_day).perform_later
    end

end
