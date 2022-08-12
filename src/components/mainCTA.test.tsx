import renderer from 'react-test-renderer'
import MainCTA from './mainCTA'
import { render, screen } from '@testing-library/react'

describe('Main CTA link renders with correct link and is clickable', () => {
    // Basic Jest-only snapshot test
    test('renders main CTA', () => {
        const tree = renderer.create(<MainCTA />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    // Basic React Testing Library tests for the main CTA component
    test('Main CTA renders with correct link', () => {
        render(<MainCTA />)

        const CTAContainer = screen.getByRole('MUIBox', { name: /MainCTA/i })

        const CTAlink = screen.getByRole('link')

        expect(CTAContainer).toContainElement(CTAlink)

        expect(CTAlink).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/davidronnlid/'
        )
    })
})
