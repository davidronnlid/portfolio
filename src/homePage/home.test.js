import { render, screen } from '@testing-library/react'
import HomePage from './home'

it('renders relevant titles for the three different pagesections of the home page', () => {
    render(<HomePage />)
    expect(screen.getByText('Hi, I am David.')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Why you should hire me')).toBeInTheDocument()
})
