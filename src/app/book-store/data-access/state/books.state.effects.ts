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
      catchError((error) => {
        return of(
          BooksActions.fetchAllBooksFailure({ error: 'Fetching books failed' })
        );
      }),
      repeat()
    )
  );
}
