import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

it('test case for the presence of all components', () => {
  render(<App />)
  const welcome = screen.getByText(/welcome/i)
  expect(welcome).toBeInTheDocument()
  const input = screen.getByPlaceholderText(/post id/i)
  expect(input).toBeInTheDocument()
  const id = screen.getByText(/id:/i)
  expect(id).toBeInTheDocument()
  const title = screen.getByText(/title:/i)
  expect(title).toBeInTheDocument()
  const body = screen.getByText(/body:/i)
  expect(body).toBeInTheDocument()
  const search = screen.getByText(/search a post by its id!/i)
  expect(search).toBeInTheDocument()
})

// it('test case for the presence of input post search bar component', () => {
//   render(<App />)

// })

// it('test case for the presence of the ID field', () => {
//   render(<App />)

// })

// it('test case for the presence of the title field', () => {
//   render(<App />)

// })

// it('test case for the presence of the body field', () => {
//   render(<App />)

// })

// it("test case for the presence of the 'search by id' field", () => {
//   render(<App />)
// })

it('testing API calls', () => {
  render(<App />)
  const input = screen.getByPlaceholderText(/post id/i)
  userEvent.type(input, 5)
  const submitButton = screen.getByRole('button', { name: 'submit' })
  userEvent.click(submitButton)

  // verifying the returned data from msw
  const returnedTitle = screen.findByText(/returned title/i)
  const returnedBody = screen.findByText(/returned body/i)
  const returnedID = screen.findByText('1')
})
