import { createAction, props } from '@ngrx/store';
import { IBookPreview } from '../../models/book-store.models';

export const fetchAllBooks = createAction('[BOOKS API] Fetch All books');

export const fetchAllBooksSuccess = createAction(
  '[BOOKS API] Fetch All books Succes',
  props<{ books: IBookPreview[] }>()
);

export const fetchAllBooksFailure = createAction(
  '[BOOKS API] Fetch All books Succes',
  props<{ error: string }>()
);

export const setSelectedISBN = createAction(
  '[BOOKS API] Set Selected Book ISBN',
  props<{ ISBN: string }>()
);
