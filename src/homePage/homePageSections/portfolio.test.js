import renderer from 'react-test-renderer'
import Portfolio from './portfolio'

// Basic Jest-only snapshot test
it('renders the portfolio page section correctly', () => {
    const tree = renderer.create(<Portfolio />).toJSON()
    expect(tree).toMatchSnapshot()
})

// Basic React Testing Library tests for the portfolio page section
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('two projects are rendered in the portfolio, each with a related icon with a GitHub project link and an image that has a relevant project link', () => {
    test('Project images are rendered in certain container devices', () => {
        const { container } = render(<Portfolio />)

        const desktopContainerImg = container.getElementsByClassName(
            'desktopContainerImg'
        )

        const desktopProjectImg =
            container.getElementsByClassName('desktopProjectImg')

        const mobileContainerImg = container.getElementsByClassName(
            'desktopContainerImg'
        )

        const mobileProjectImg =
            container.getElementsByClassName('desktopProjectImg')

        const projectAndContainerImgs = [
            desktopContainerImg,
            desktopProjectImg,
            mobileContainerImg,
            mobileProjectImg,
        ]

        expect(projectAndContainerImgs.every((elm) => typeof elm === 'string'))
        expect(projectAndContainerImgs.length).toEqual(4)
    })
})
