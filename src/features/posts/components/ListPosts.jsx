import { useSelector } from "react-redux"
import { selectAllPosts } from '../postSlice'

import PostCard from './PostCard.jsx'

const ListPosts = (props) => {

  const posts = useSelector(selectAllPosts);

  return <section {...props}>
    <h1 className="text-2xl text-slate-800 font-medium">Blog</h1>
    <ul className='grid md:grid-cols-2 gap-x-3 gap-y-7 py-12'>
      {posts.length > 0 && posts.map(post => <PostCard post={post} key={post.id} />)}
    </ul>
  </section>
}

export default ListPosts