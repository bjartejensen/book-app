describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1800, 1400);
    cy.visit('http://localhost:4200');
  });

  it('builds the app and visit localhost', () => {
    cy.visit('http://localhost:4200');
  });

  it('shows a list of books', () => {
    cy.get('[data-cy=books-overview]').should('exist');
    cy.get('#978-0-141-99106-1').should('exist');
    cy.get('#978-0-141-99106-2').should('exist');
    cy.get('#978-0-141-99106-3').should('exist');
  });

  it('should show and hide preview after click and then background clicked', () => {
    cy.get('[data-cy=btn-all-books]').click();
    cy.url().should('eq', 'http://localhost:4200/books');
    cy.get('[data-cy=book-preview-container]').should('not.exist');
    cy.get('[data-cy=books-overview]').children().first().click();
    cy.get('[data-cy=book-preview-container]').should('exist');
    cy.get('body').click(0, 0);
    cy.get('[data-cy=book-preview-container]').should('not.exist');
  });
});
