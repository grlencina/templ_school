class MessageMailer < ApplicationMailer

    def new_message
        @message = params[:message]
        @recipient = if @message.user == @message.conversation.job.user
            @message.conversation.user
        else
            @message.conversation.job.user
        end
        
        mail to: @recipient.email, subject: "You've got a new message"
    end
end
