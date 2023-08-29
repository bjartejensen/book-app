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

  books$: Observable<IBookPreview[]> = this.store.pipe(
    select(BooksSelectors.selectBookInStore)
  );

  constructor() {
    this.booksFetch();

    this.books$.subscribe((x) => {
      debugger;
    });
  }

  booksFetch(): void {
    this.store.dispatch(BooksActions.fetchAllBooks());
  }
}
