import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BOOKS_FEATURE_KEY, BookStoreState } from './books.state.models';

export const selectBookStoreState =
  createFeatureSelector<BookStoreState>(BOOKS_FEATURE_KEY);

export const selectBookInStore = createSelector(
  selectBookStoreState,
  (state: BookStoreState) => state.books
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
