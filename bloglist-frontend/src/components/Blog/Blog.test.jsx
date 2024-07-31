import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    author: 'test',
    title: 'test',
    url: 'www.test.com',
    likes: 0
  }

  render(<Blog isCreator={true}
    blog={blog}
    onLike={vi.fn}
    onDelete={vi.fn}
  />)

  const element = screen.getByText('test - test')
  const hidden = screen.queryByTestId('hidden')
  expect(element).toBeDefined()
  expect(hidden).toBeNull()
})

test('hidden components are shown', async () => {
  const blog = {
    author: 'test',
    title: 'test',
    url: 'www.test.com',
    likes: 0
  }


  render(<Blog isCreator={true}
    blog={blog}
    onLike={vi.fn}
    onDelete={vi.fn}
  />)

  const user = userEvent.setup()
  const button = screen.getByTestId('toggle')
  await user.click(button)

  const hidden = screen.getByTestId('hidden')
  expect(hidden).toBeDefined()
})

test('event handlers are called properly', async () => {
  const blog = {
    author: 'test',
    title: 'test',
    url: 'www.test.com',
    likes: 0
  }

  const mockLikeHandler = vi.fn()
  render(<Blog isCreator={true} blog={blog} onLike={mockLikeHandler} onDelete={vi.fn} />)

  const user = userEvent.setup()

  const toggleButton = screen.getByTestId('toggle')
  await user.click(toggleButton)

  const likeButton = screen.getByTestId('like')

  await user.click(likeButton)
  await user.click(likeButton)

  expect(mockLikeHandler.mock.calls).toHaveLength(2)
})
