import { BookCoverComponent } from './book-cover.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(BookCoverComponent.name, () => {
  beforeEach(() => {
    cy.mount(BookCoverComponent, {
      imports: [MatIconModule, BrowserAnimationsModule],
      componentProperties: {
        bookCover: {
          authors: ['David Graeber', 'David Wengrow'],
          subTitle: 'A new history of Humanity',
          title: 'The Dawn of Everything',
          teaserText: 'The International Bestseller',
        },
      },
    });
  });

  it('Should mount book cover component correctly', () => {
    cy.viewport(1200, 800);
  });

  it('Should display correct book info on card', () => {
    cy.get('[data-cy=book-cover-title]')
      .should('exist')
      .should('have.text', 'The Dawn of Everything');

    cy.get('[data-cy=book-cover-subtitle]')
      .should('exist')
      .should('have.text', 'A new history of Humanity');

    cy.get('#0').should('contain.text', 'David Graeber');
    cy.get('#1').should('contain.text', 'David Wengrow');

    cy.get('[data-cy=book-cover-icon]')
      .should('exist')
      .should('have.css', 'opacity', '0.2');
  });
});
