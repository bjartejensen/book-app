import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BOOKS_FEATURE_KEY, BookStoreState, TOP_3 } from './books.state.models';

export const selectBookStoreState =
  createFeatureSelector<BookStoreState>(BOOKS_FEATURE_KEY);

export const selectBooksInStore = createSelector(
  selectBookStoreState,
  (state: BookStoreState) => state.books
);

export const selectTop3BooksInStore = createSelector(
  selectBookStoreState,
  (state: BookStoreState) => state.books.slice(0, TOP_3)
);

/**
 * @description Here we are making use of the fact that ISBN is a unique book identifier
 * The nullish coalescing operator is implemented to adhere to ES-lint rules as we will always
 * encounter a preview instance in this simple app. Hence, undefined is ruled out
 * per se.
 *
 */
export const selectedBookByISBN = createSelector(
  selectBookStoreState,
  (state: BookStoreState) =>
    state.books.find((x) => x.details.isbn === state.selectedISBN) ?? undefined
);

export const selectedBooksByTitle = createSelector(
  selectBookStoreState,
  (state: BookStoreState) =>
    state.books.filter(
      (x) => x.cover.title.includes(state.titleSearch!) ?? []
    ) ?? undefined
);
