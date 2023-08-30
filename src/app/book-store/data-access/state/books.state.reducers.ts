import {
  fetchAllBooks,
  fetchAllBooksFailure,
  fetchAllBooksSuccess,
  setSelectedISBN,
  resetSelectedISBN,
  fetchBooksByTitle,
} from './books.state.actions';
import { BookStoreState } from './books.state.models';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: BookStoreState = {
  isLoading: false,
  books: [],
};

const reducer = createReducer(
  initialState,
  on(fetchAllBooks, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchAllBooksSuccess, (state, { books }) => ({
    ...state,
    books: books,
    isLoading: false,
  })),
  on(fetchAllBooksFailure, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  })),
  on(setSelectedISBN, (state, { ISBN }) => ({
    ...state,
    selectedISBN: ISBN,
  })),
  on(resetSelectedISBN, (state) => ({
    ...state,
    selectedISBN: undefined,
  })),
  on(fetchBooksByTitle, (state, { titleSearch }) => ({
    ...state,
    titleSearch: titleSearch,
  }))
);

export function booksReducer(state: BookStoreState, action: Action) {
  return reducer(state, action);
}
