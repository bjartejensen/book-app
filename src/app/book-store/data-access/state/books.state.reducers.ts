import {
  fetchAllBooks,
  fetchAllBooksFailure,
  fetchAllBooksSuccess,
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
  }))
);

export function booksReducer(state: BookStoreState, action: Action) {
  return reducer(state, action);
}
