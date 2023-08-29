import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BOOKS_FEATURE_KEY, BookStoreState } from './books.state.models';

export const selectBookStoreState =
  createFeatureSelector<BookStoreState>(BOOKS_FEATURE_KEY);

export const selectBookInStore = createSelector(
  selectBookStoreState,
  (state: BookStoreState) => state.books
);

export const selectedBookByISBN = createSelector(
  selectBookStoreState,
  (state: BookStoreState) =>
    state.books.find((x) => x.details.isbn === state.selectedISBN) ?? undefined
);
