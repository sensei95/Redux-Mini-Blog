import { useSelector } from 'react-redux'
import { selectUserById } from '../../users/userSlice'

const PostAuthor = ({ userId }) => {

  const user = useSelector(selectUserById(userId))

  if (user === undefined) {
    return <span>By Unknown author</span>
  }

  return <span>By {user.name}</span>
}

export default PostAuthor;