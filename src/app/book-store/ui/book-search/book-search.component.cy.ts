import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createOutputSpy } from 'cypress/angular';
import { BookSearchComponent } from './book-search.component';

describe(BookSearchComponent.name, () => {
  beforeEach(() => {
    cy.mount(BookSearchComponent, {
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      componentProperties: {
        titleEmitter: createOutputSpy('titleEmitterSpy'),
      },
    });
  });

  it('should have the correct elements', () => {
    const w = 1400;
    cy.viewport(w, (w * 2) / 3);

    cy.get('[data-cy=form]').should('exist');
    cy.get('[data-cy=title-search]').should('exist');
  });

  it('should have the correct styling', () => {
    cy.get('[data-cy=form-wrapper]')
      .should('exist')
      .should('have.css', 'display', 'grid');

    cy.get('[data-cy=title-search]')
      .should('exist')
      .should('have.css', 'display', 'inline-block')
      .should('have.attr', 'type', 'text');
  });

  it('should emit title on submit', () => {
    cy.get('@titleEmitterSpy').should('not.have.been.called');
    cy.get('[data-cy=title-search]').type('The').type('{enter}');
    cy.get('@titleEmitterSpy').should('have.been.calledWithExactly', 'The');
  });
});
