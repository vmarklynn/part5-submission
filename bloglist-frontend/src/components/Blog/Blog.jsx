import { useState } from 'react'

const Blog = ({ blog, isCreator, onLike, onDelete }) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLike = () => {
    const newLike = blog.likes + 1
    const updatedBlog = { ...blog, likes: newLike }
    onLike(updatedBlog)
  }

  const handleDelete = () => {
    if (window.confirm(`Remove ${blog.title} by ${blog.author}?`)) {
      const id = blog.id
      onDelete(id)
    }
  }

  return (
    <div style={blogStyle}>
      <p>{blog.title} - {blog.author} <button data-testid="toggle" onClick={toggleVisibility}>{visible ? 'Hide' : 'View'}</button></p>
      {visible &&
        <div data-testid='hidden'>
          <p>{blog.url}</p>
          <p data-testid='likes'>{blog.likes} <button data-testid="like" onClick={handleLike}>Like</button></p>
          <p>{blog.user ? blog.user.name : ''}</p>
          {isCreator && <button onClick={handleDelete}>Remove</button>}
        </div>
      }
    </div>
  )
}

export default Blog
