class JobSerializer < ActiveModel::Serializer
  attributes :id, :applicantIds, :description, :title, :user, :conversations
  belongs_to :category
  #has_many :conversations, serializer: ConversationSerializer

  def conversations
    object.conversations.map {|a| ConversationSerializer.new(a).as_json }
  end 

  def applicantIds
    object.conversations.map &:user_id
  end
end
