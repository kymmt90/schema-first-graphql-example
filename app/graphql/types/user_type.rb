class Types::UserType < Types::BaseObject
  field :email, String, null: true
  field :popularPosts, [Types::PostType], null: true
end
