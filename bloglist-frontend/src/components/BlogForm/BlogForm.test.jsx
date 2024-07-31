import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

test('verify that BlogForm calls submit handler', async () => {
  const user = userEvent.setup()

  const mockSubmitHandler = vi.fn()
  render(<BlogForm
    create={mockSubmitHandler}
  />)


  const textboxes = screen.getAllByRole('textbox')
  const submit = screen.getByRole('button')

  await user.type(textboxes[0], 'Test')
  await user.type(textboxes[1], 'Test Author')
  await user.type(textboxes[2], 'www.test.com')

  await user.click(submit)

  expect(mockSubmitHandler.mock.calls).toHaveLength(1)

  expect(mockSubmitHandler.mock.calls[0][0].title).toBe('Test')
  expect(mockSubmitHandler.mock.calls[0][0].author).toBe('Test Author')
  expect(mockSubmitHandler.mock.calls[0][0].url).toBe('www.test.com')


})
