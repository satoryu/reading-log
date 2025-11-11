import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders app title', () => {
  render(<App />)
  expect(screen.getByText(/Reading Log/i)).toBeInTheDocument()
})
