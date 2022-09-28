import PostPublishedAt from './PostPublishedAt.jsx'
import PostAuthor from './PostAuthor.jsx'
import ReactionButtons from './ReactionButtons.jsx'

const PostCard = ({ post }) => {
  return <article className='border p-6 grid gap-y-3'>
    <header>
      <h3>{post.title}</h3>
      <PostPublishedAt date={post.publishedAt} />
    </header>
    <p>{post.content.substring(0, 50)}</p>
    <PostAuthor userId={post.userId} />
    <ReactionButtons reactions={post.reactions} />
  </article>
}

export default PostCard