import { useDispatch } from "react-redux"
import { reactionAdded } from '../postSlice'

const ReactionButton = ({ reaction, postId }) => {
  const dispatch = useDispatch()
  const onReactionClick = (e) => {
    e.preventDefault()
    
    dispatch(reactionAdded({
      postId,
      reaction: reaction.key
    }))
  }
  return <button type='button' className='flex items-center gap-2' onClick={onReactionClick}>
    {reaction.key} <span>{reaction.value}</span>
  </button>
}

export default ReactionButton