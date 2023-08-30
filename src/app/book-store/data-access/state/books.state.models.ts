import { IBookPreview } from '../../models/book-store.models';

export const BOOKS_FEATURE_KEY = 'books';
export const TOP_3 = 3;

export interface BookStoreState {
  isLoading: boolean;
  books: IBookPreview[];
  selectedISBN?: string;
  titleSearch?: string;
  error?: string;
}
