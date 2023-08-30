import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

//#region Internal interface specifications (bundled and exported below)

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

interface IResetSelectedISBNDispatch {
  resetSelectedISBN(): void;
}

//#endregion

//#region Interface externally available

/**
 * @description Full implementation of Facade API
 */
export interface IBooksServiceCompositeForFacade
  extends IBooksObserve,
    IBooksFetchDispatch,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch,
    IResetSelectedISBNDispatch {}

/**
 * @description Specific provisioning of Book Store Frontpage API
 */
export interface IBookServiceCompositeForBookStoreFrontpage
  extends IBooksObserve,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch,
    IResetSelectedISBNDispatch {}

//#endregion
