describe('NY Times Most Popular Articles', () => {
  it('should load the homepage and display the heading', () => {
    // Visit the homepage
    cy.visit('http://localhost:3000'); 

    // Assert that the heading is present
    cy.contains('NY Times Most Popular Articles').should('be.visible');
  });

  it('should allow selecting a time frame', () => {
    // Visit the homepage
    cy.visit('http://localhost:3000');

    // Select 'Last 7 Days' from the dropdown
    cy.get('select').select('Last 7 Days');

    // Assert that articles for the last 7 days are fetched and visible
    cy.get('[data-testid="article-item"]').should('have.length.greaterThan', 0); 
  });
});
