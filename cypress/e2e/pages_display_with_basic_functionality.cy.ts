describe('Contact form submission successful page loads and displays clickable back button', () => {
    it('The contact form success page successfully loads ', () => {
        cy.visit("/contact-success");
    })
    it("renders text and clickable back button",()=> {
            cy.visit("/contact-success").contains("Go back").click();
        })
    })

describe('The home page successfully loads', () => {
    it('The home page successfully loads', () => {
        cy.visit("/")
    })
  })

describe('The home page renders three different page sections', () => {
    it('The home page displays three specifically relevant headers', () => {
        cy.visit("/").get("div").contains("Portfolio");
        cy.visit("/").get('div').contains("Who I am");
        cy.visit("/").get('div').contains("Contact");
    })
  })

  describe('The portfolio page section displays two project cards, each with a clickable image of the project', () => {
    it('The portfolio page section displays two project card titles and at least one link', () => {
        cy.visit("/").get("div").contains("Calculator");
        cy.visit("/").get('div').contains("David Rönnlid movies");
        cy.visit("/").get('a');

        // This test is incomplete and the home page can certainly be tested further in the future. Moving on to other projects for now though
    })
  })