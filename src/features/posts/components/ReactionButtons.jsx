import ReactionButton from './ReactionButton.jsx'
const ReactionButtons = ({ reactions, postId }) => {

  let content = Object.entries(reactions).map(([key, value]) => {
    let reaction = {
      key, value
    }
    return <ReactionButton reaction={reaction} postId={postId} key={key} />
  })

  return <div className='flex items-center gap-5 border-t pt-5'>
    {content}
  </div>
}

export default ReactionButtons