import { selectAllUsers } from '../../users/userSlice'
import { postAdded } from '../../posts/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const AddPostForm = (props) => {

  const users = useSelector(selectAllUsers)
  const dispath = useDispatch()

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userId: ''
  })

  const formFieldChange = (e) => {
    setFormData(prevFormData => {

      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispath(postAdded(formData))

    setFormData({
      title: '',
      content: '',
      userId: ''
    })
  }
  return <section {...props}>
    <h1 className="text-2xl text-slate-800 font-medium">Add new post</h1>

    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor='title'>Title : </label>
        <input name='title' id='title' placeholder='Tap your post title here' value={formData.title} onChange={formFieldChange} />
      </div>
      <div className="field field--text">
        <label htmlFor='content'>Content : </label>
        <textarea name='content' id='content' value={formData.content} onChange={formFieldChange}></textarea>
      </div>
      <div className="field">
        <label htmlFor='userid'>Author : </label>
        <select name='userId' value={formData.userId} onChange={formFieldChange}>
          <option value=''>Choose the author</option>
          {users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
        </select>
      </div>
      <div>
        <button type='submit'>Save post</button>
      </div>
    </form>
  </section>
}

export default AddPostForm