import { InjectionToken, inject } from '@angular/core';
import { IBooksServiceCompositeForFacade } from './books.state.solid';

import * as BooksActions from './books.state.actions';
import * as BooksSelectors from './books.state.selectors';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

/**
 * @description Creating an InjectionToken with a factory provider in order to
 * distribute an interface in stead of a class. This allows for a more granular
 * provisioning of methods and properties accessible to components
 */
export const BOOKS_FACADE_TOKEN: InjectionToken<IBooksServiceCompositeForFacade> =
  new InjectionToken<IBooksServiceCompositeForFacade>('BOOKS_FACADE_TOKEN', {
    factory() {
      return new BooksFacade();
    },
  });

/**
 * @description Full implemation of all Book Services related methods and properties
 */
export class BooksFacade implements IBooksServiceCompositeForFacade {
  //#region D.I
  private readonly store = inject(Store); //for referencing actions and selectors
  //#endregion

  //#region Implementation - Observables

  books$: Observable<IBookPreview[]> = this.store.pipe(
    select(BooksSelectors.selectBooksInStore)
  );

  booksTop3$: Observable<IBookPreview[]> = this.store.pipe(
    select(BooksSelectors.selectTop3BooksInStore)
  );

  selectedBookByISBN$: Observable<IBookPreview | undefined> = this.store.pipe(
    select(BooksSelectors.selectedBookByISBN)
  );

  booksInSearch$: Observable<IBookPreview[] | undefined> = this.store.pipe(
    select(BooksSelectors.selectedBooksByTitle)
  );

  //#endregion

  //#region Life Cycle Hooks

  constructor() {
    this.booksFetchAll();
  }

  //#endregion

  //#region Implementation - Set Selected ISBN

  setSelectedISBN(ISBN: string): void {
    this.store.dispatch(BooksActions.setSelectedISBN({ ISBN: ISBN }));
  }

  //#endregion

  //#region Implementation - Reset Selected ISBN

  resetSelectedISBN(): void {
    console.log('Getting into the facade reset?');
    this.store.dispatch(BooksActions.resetSelectedISBN());
  }

  //#endregion

  //#region Implementation - Books Search by Title

  booksSearchByTitleDispatch(title: string): void {
    this.store.dispatch(BooksActions.fetchBooksByTitle({ titleSearch: title }));
  }

  //#endregion

  //#region Implementation - Book Fetch All

  booksFetchAll(): void {
    this.store.dispatch(BooksActions.fetchAllBooks());
  }

  //#endregion
}
