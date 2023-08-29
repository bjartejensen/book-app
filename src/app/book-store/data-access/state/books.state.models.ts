import { IBookPreview } from '../../models/book-store.models';

export const BOOKS_FEATURE_KEY = 'books';

export interface BookStoreState {
  isLoading: boolean;
  books: IBookPreview[];
  selectedISBN?: string;
  error?: string;
}
