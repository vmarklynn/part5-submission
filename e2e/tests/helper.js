const loginWith = async (page, username, password) => {
  await page.getByTestId('username').fill(username)
  await page.getByTestId('password').fill(password)
  await page.getByRole('button', { name: 'Login' }).click()
}

const createWith = async (page, author, title, url) => {
  await page.getByRole('button', { name: 'New Note' }).click()
  await page.getByTestId('author').fill(author)
  await page.getByTestId('title').fill(title)
  await page.getByTestId('url').fill(url)
  await page.getByRole('button', { name: 'Submit' }).click()
}

module.exports = { loginWith, createWith }
