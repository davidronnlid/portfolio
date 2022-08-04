import renderer from 'react-test-renderer'
import MainCTA from './mainCTA'

// Basic Jest-only snapshot test
it('renders main CTA correctly', () => {
    const tree = renderer.create(<MainCTA />).toJSON()
    expect(tree).toMatchSnapshot()
})

// Basic React Testing Library tests for the main CTA component
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('when user clicks on the main CTA, they should be sent to my LinkedIn', () => {
    test('Main CTA component renders with correct link', () => {
        render(<MainCTA />)

        const link = screen.getByRole('link')

        expect(link).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/davidronnlid/'
        )
    })

    it('is clickable', () => {
        const user = userEvent.setup()

        render(<MainCTA />)

        const link = screen.getByRole('link')

        expect(user.click(link)).toBeTruthy
    })
})
