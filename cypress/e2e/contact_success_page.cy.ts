describe('The contact form success page successfully loads and renders text and clickable back button', () => {
    it('The contact form success page successfully loads', () => {
        cy.visit("/contact-success").contains("Success");

        cy.visit("/contact-success").contains("Go back").click();
      
    })
  })    