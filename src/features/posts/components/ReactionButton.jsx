const ReactionButton = ({ reaction }) => {
  return <button type='button' className='flex items-center gap-2'>
    {reaction.key} <span>{reaction.value}</span>
  </button>
}

export default ReactionButton