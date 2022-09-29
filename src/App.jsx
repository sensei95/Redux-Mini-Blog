import ListPosts from './features/posts/components/ListPosts.jsx'
import AddPostForm from './features/posts/components/AddPostForm.jsx'

export default function App() {
  return (
    <main>
      <div className="grid lg:grid-cols-3 gap-x-12 w-10/12 mx-auto py-12">
        <ListPosts className="col-span-2" />
        <AddPostForm className="col-span-1" />
      </div>
    </main>
  )
}
