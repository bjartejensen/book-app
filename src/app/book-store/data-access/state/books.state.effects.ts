import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as BooksActions from './books.state.actions';

import { BooksService } from '../services/books.service';
import { catchError, map, of, repeat, switchMap } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

@Injectable({ providedIn: 'root' })
export class BooksEffects {
  //#region D.I.

  private booksService = inject(BooksService);
  private actions$ = inject(Actions);

  //#endregion

  /**
   * @description Call to server for list of books.
   * Since we have no real back-end the response when running locally is set-up via
   * json-server to incorporate a real httpClient call.
   * In production the response is composed of a hacked list of IBookPreview objects
   * wrapped in a RxJS of-operator
   *
   */
  fetchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.fetchAllBooks),
      switchMap(() => {
        return this.booksService.fetchBooks().pipe(
          map((books: IBookPreview[]) => {
            return BooksActions.fetchAllBooksSuccess({ books: books });
          })
        );
      }),
      catchError(() => {
        return of(
          BooksActions.fetchAllBooksFailure({ error: 'Fetching books failed' })
        );
      }),
      repeat()
    )
  );
}
