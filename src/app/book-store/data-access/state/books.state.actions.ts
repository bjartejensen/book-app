import { createAction, props } from '@ngrx/store';
import { IBookPreview } from '../../models/book-store.models';

/**
 * @description Fetching all books a app start up. The associated effect will
 * handle to call to server and trigger success- or failure actions in response
 */
export const fetchAllBooks = createAction('[BOOKS API] Fetch All books');

/**
 * @description In case of HTTP response 200 this action will propagate
 * a list of IBookPreview to the reducer. In this simple app this action only occurs at
 * start-up
 */
export const fetchAllBooksSuccess = createAction(
  '[BOOKS API] Fetch All books Succes',
  props<{ books: IBookPreview[] }>()
);

/**
 * @description In case of HTTP error this action will propagate
 * an error to the reducer
 */
export const fetchAllBooksFailure = createAction(
  '[BOOKS API] Fetch All books Succes',
  props<{ error: string }>()
);

/**
 * @description Action handling user request for preview a specific book.
 * ISBN is a unique identifier
 */
export const setSelectedISBN = createAction(
  '[BOOKS API] Set Selected Book ISBN',
  props<{ ISBN: string }>()
);

/**
 * @description Action handling user request for reset preview.
 */
export const resetSelectedISBN = createAction(
  '[BOOKS API] Reset Selected Book ISBN'
);
