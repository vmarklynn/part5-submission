import { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ create }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const blog = {
      author: author,
      title: title,
      url: url,
    }
    create(blog)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          name="Title"
          onChange={(event) => setTitle(event.target.value)}
          data-testid='title'
        />
        <label>Author</label>
        <input
          type="text"
          value={author}
          name="Author"
          onChange={(event) => setAuthor(event.target.value)}
          data-testid='author'
        />
        <label>URL</label>
        <input
          type="text"
          value={url}
          name="Url"
          onChange={(event) => setUrl(event.target.value)}
          data-testid='url'
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  create: PropTypes.func.isRequired
}

export default BlogForm
