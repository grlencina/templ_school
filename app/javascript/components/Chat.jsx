import React from 'react'
export default class Chat extends React.Component {
    renderConversationsList(){
        const {job} = this.props;
       
        return (
            
            <div className="users">
                
                {job.conversations.map((conversation) => {
                    return (
                        <div className="conversation-preview" key={conversation.id}>
                            <div className="avatar"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                                <div className="preview">
                                <h5> {conversation.user.email}<span className="chat-date">{conversation.messages[0].created_at}</span></h5>
                                <p>{conversation.messages[0].body}</p>
                            </div>
                        </div>
                    )
                })}
                
                
            </div>
        )
    }
    
    render() {
        const {currentUser, job} = this.props;
        const conversation = job.conversations[0];
        return (
            <div className="conversations">
                { currentUser.id === job.user.id && this.renderConversationsList() }
    
    <div className="conversation">
    
      <div className="messages">
        { conversation.messages.map((message)=>{
            return (
                <>
                {message.user.id === currentUser.id && (
                    <div className="outgoing-message">
                <div className="bubble">
                    <p>{message.body}</p>
                    <span className="time-date"> { message.created_at}</span>
                </div>
                </div>
                )}
                {message.user.id !== currentUser.id && (
                    <div className="incoming-message">
                <div className="avatar"><img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/></div>
                <div className="body">
                    <div className="bubble">
                    <p>{ message.body }</p>
                    <span className="time-date">{ message.created_at}</span>
                    </div>
                </div>
                </div>
                )}
                </>
            )
        
            
          
        }) }
          
        
      </div>
      {/* <%= form_for Message.new, url: messages_path, method: :post do |f| %>
        <div className="d-flex flex-row type-message">
          <%= f.hidden_field :conversation_id, value: @conversation.id %>
          <%= f.text_field :body, placeholder: "Type a message" %>
          <%= f.submit "Send", class: "btn btn-primary btn-sm" %>
        </div>
      <% end %> */}
    </div>
  </div> 
        )
    }
}