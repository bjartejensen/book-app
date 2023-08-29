import { InjectionToken, inject } from '@angular/core';
import { IBooksServiceCompositeForFacade } from './books.state.solid';

import * as BooksActions from './books.state.actions';
import * as BooksSelectors from './books.state.selectors';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

export const BOOKS_FACADE_TOKEN: InjectionToken<IBooksServiceCompositeForFacade> =
  new InjectionToken<IBooksServiceCompositeForFacade>('BOOKS_FACADE_TOKEN', {
    factory() {
      return new BooksFacade();
    },
  });

export class BooksFacade implements IBooksServiceCompositeForFacade {
  //#region D.I
  private readonly store = inject(Store);
  //#endregion

  //#region Implementation - Observables

  books$: Observable<IBookPreview[]> = this.store.pipe(
    select(BooksSelectors.selectBookInStore)
  );

  selectedBookByISBN$: Observable<IBookPreview> = this.store.pipe(
    select(BooksSelectors.selectedBookByISBN)
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

  //#region Implementation - Book Fetch All

  booksFetchAll(): void {
    this.store.dispatch(BooksActions.fetchAllBooks());
  }

  //#endregion
}
