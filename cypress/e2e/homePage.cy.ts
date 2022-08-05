describe('the home page successfully loads', () => {
    it('the home page successfully loads', () => {
        cy.visit('/')
    })
})

describe('the home page renders three different page sections', () => {
    it('the home page displays three specifically relevant headers', () => {
        cy.visit('/').get('div').contains('Hi, I am David.')
        cy.visit('/').get('div').contains('Portfolio')
        cy.visit('/').get('div').contains('Why you should hire me')
    })
})

describe("the portfolio page section has a clickable link to Davids two projects' sites", () => {
    it('calculator project link renders with defined href', () => {
        cy.visit('/')
            .get('[data-cy="calculator-project-link"]')
            .should('not.have.attr', 'href', '#undefined' || '')
    })
    it('movie browser project link renders with defined href', () => {
        cy.visit('/')
            .get('[data-cy="movie-browser-project-link"]')
            .should('not.have.attr', 'href', '#undefined' || '')
    })
})
