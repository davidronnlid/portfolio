import renderer from 'react-test-renderer'
import Portfolio from './portfolio'

// Basic Jest-only snapshot test
it('renders the portfolio page section correctly', () => {
    const tree = renderer.create(<Portfolio />).toJSON()
    expect(tree).toMatchSnapshot()
})

// Basic React Testing Library tests for the portfolio page section
import { getByAltText, render, screen, within } from '@testing-library/react'

describe('two projects are rendered in the portfolio, each with a related icon with a GitHub project link and an image that has a relevant project link', () => {
    beforeEach(() => {
        render(<Portfolio />)
    })

    test('Project and container device images are rendered', () => {
        // Note that the casing of the first letters of the image alt text project titles are crucial for matching only the project images and not the container images below (the container images have alt texts including the same exact strings but with the project title set to lower case)

        const desktopContainerImg = screen.getByAltText('desktop', {
            exact: false,
        })

        const desktopProjectImg = screen.getByAltText(
            'Davids Movie Browser project.',
            {
                exact: true,
            }
        )

        const mobileContainerImg = screen.getByAltText('mobile', {
            exact: false,
        })

        const mobileProjectImg = screen.getByAltText(
            'Davids Calculator project.',
            {
                exact: true,
            }
        )

        const projectAndContainerImgs = [
            desktopContainerImg,
            desktopProjectImg,
            mobileContainerImg,
            mobileProjectImg,
        ]

        expect(projectAndContainerImgs.every((elm) => typeof elm === 'string'))
        expect(projectAndContainerImgs.length).toEqual(4)
        projectAndContainerImgs.forEach((elm) => expect(elm).toBeVisible())
    })

    test('project image links are rendered', () => {
        const desktopProjectImg = screen.getByAltText(
            'Davids Movie Browser project.',
            {
                exact: true,
            }
        )

        const mobileProjectImg = screen.getByAltText(
            'Davids Calculator project.',
            {
                exact: true,
            }
        )

        const desktopProjectImgLink = desktopProjectImg.closest('a')

        const mobileProjectImgLink = mobileProjectImg.closest('a')

        const projectImgLinks = [desktopProjectImgLink, mobileProjectImgLink]

        projectImgLinks.forEach((elm) =>
            expect(elm).toHaveAttribute(
                'href',
                expect.stringContaining('https://davidronnlid')
            )
        )
    })

    test('a relevant Project Tooltip Github Link is rendered for each project', () => {
        const projectGithubTooltipLinks = screen.getAllByLabelText(
            'Project Tooltip Github Link'
        )

        expect(projectGithubTooltipLinks.length).toEqual(2)

        const githubLinks = screen.getAllByTestId('github-link')

        expect(githubLinks.length).toEqual(2)

        githubLinks.forEach((link) =>
            expect(link).toHaveAttribute(
                'href',
                expect.stringContaining('https://github.com/davidronnlid')
            )
        )
    })
})
