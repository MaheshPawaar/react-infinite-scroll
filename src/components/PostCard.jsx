
const PostCard = ({post}) => {
  return (
    <div className="p-4 border shadow rounded">
      <h2 className="text-xl">{post.title}</h2>
      <p>{post.body}</p>
      <div className="mt-2 text-gray-600">
        Views: {post.views} | Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}
      </div>
    </div>
  )
}

export default PostCard;