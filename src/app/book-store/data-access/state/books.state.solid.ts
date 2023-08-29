import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

interface IBooksObserve {
  books$: Observable<IBookPreview[]>;
}

interface IBooksFetchDispatch {
  booksFetchAll(): void;
}

interface ISelectedBookByISBNObserve {
  selectedBookByISBN$: Observable<IBookPreview | undefined>;
}

interface ISetSelectedISBNDispatch {
  setSelectedISBN(ISBN: string): void;
}

/**
 * Full implementation of Facade API
 */
export interface IBooksServiceCompositeForFacade
  extends IBooksObserve,
    IBooksFetchDispatch,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch {}

/**
 * Specific provisioning of Book Store Frontpage API
 */
export interface IBookServiceCompositeForBookStoreFrontpage
  extends IBooksObserve,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch {}
