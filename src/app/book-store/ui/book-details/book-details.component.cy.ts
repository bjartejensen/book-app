import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailsComponent } from './book-details.component';

describe(BookDetailsComponent.name, () => {
  beforeEach(() => {
    cy.mount(BookDetailsComponent, {
      imports: [MatIconModule, BrowserAnimationsModule],
      componentProperties: {
        bookDetails: {
          isbn: '978-0-141-99106-1',
          publishedYear: 2021,
          publisher: 'Penguine Books',
          publisherLogo: 'library_books',
        },
      },
    });
  });

  it('Should mount book cover component correctly', () => {
    cy.viewport(1200, 800);
  });

  it('Should display correct book info on card', () => {
    cy.get('[data-cy=book-details-publisher]')
      .should('exist')
      .should('have.text', 'Penguine Books');

    cy.get('[data-cy=book-details-publish-year]').should('have.text', '2021');

    cy.get('[data-cy=book-details-isbn]').should(
      'contain.text',
      '978-0-141-99106-1'
    );
  });
});
