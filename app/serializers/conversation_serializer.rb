class ConversationSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  has_many :messages, serializer: MessageSerializer
end
