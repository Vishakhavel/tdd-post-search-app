import { render, screen } from '@testing-library/react'
import App from './App'

it('test case for the presence of Welcome component', () => {
  render(<App />)
  const welcome = screen.getByText(/welcome/i)
  expect(welcome).toBeInTheDocument()
})

it('test case for the presence of input post search bar component', () => {
  render(<App />)
  const input = screen.getByPlaceholderText(/post id/i)
  expect(input).toBeInTheDocument()
})
