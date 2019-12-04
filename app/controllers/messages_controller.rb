class MessagesController < ApplicationController
  def create
    @message = Message.new message_params.merge(user_id: current_user.id)

    if @message.save
      MessageMailer.with(message: @message).new_message.deliver_later  # <==
      redirect_to job_path(@message.conversation.job)
    else
      redirect_to job_path(@message.conversation.job), alert: "Message could not be created"
    end
  end

  private

    def message_params
      params.require(:message).permit(:body, :conversation_id)
    end
end
