import renderer from 'react-test-renderer'
import MainCTA from './mainCTA'

// Basic Jest-only snapshot test
it('renders main CTA', () => {
    const tree = renderer.create(<MainCTA />).toJSON()
    expect(tree).toMatchSnapshot()
})

// Basic React Testing Library tests for the main CTA component
import { render, screen } from '@testing-library/react'

describe('Main CTA link renders with correct link and is clickable', () => {
    beforeEach(() => {
        render(<MainCTA />)
    })
    test('Main CTA renders with correct link', () => {
        const CTAContainer = screen.getByRole('MUIBox', { name: /MainCTA/i })

        const CTAlink = screen.getByRole('link')

        expect(CTAContainer).toContainElement(CTAlink)

        expect(CTAlink).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/davidronnlid/'
        )
    })
})
