describe('The home page successfully loads', () => {
    it('The home page successfully loads', () => {
        cy.visit('/')
    })
})

describe('The home page renders three different page sections', () => {
    it('The home page displays three specifically relevant headers', () => {
        cy.visit('/').get('div').contains('Hi, I am David.')
        cy.visit('/').get('div').contains('Portfolio')
        cy.visit('/').get('div').contains('Why you should hire me')
    })
})

describe('The portfolio page section displays two project cards, each with a clickable image of the project', () => {
    it('The portfolio page section displays two project card titles and at least one link', () => {
        cy.visit('/').get('img')
        cy.visit('/').get('a')

        // This test is incomplete
    })
})
