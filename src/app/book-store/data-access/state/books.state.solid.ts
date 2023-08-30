import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

//#region Internal interface specifications (bundled and exported below)

interface IBooksObserve {
  books$: Observable<IBookPreview[]>;
}

interface IBooksTop3Observe {
  booksTop3$: Observable<IBookPreview[]>;
}

interface IBooksInSearchObserve {
  booksInSearch$: Observable<IBookPreview[] | undefined>;
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

interface IBooksSearchByTitleDispatch {
  booksSearchByTitleDispatch(titleSearch: string): void;
}

//#endregion

//#region Interface externally available

/**
 * @description Full implementation of Facade API
 */
export interface IBooksServiceCompositeForFacade
  extends IBooksObserve,
    IBooksTop3Observe,
    IBooksInSearchObserve,
    IBooksSearchByTitleDispatch,
    IBooksFetchDispatch,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch,
    IResetSelectedISBNDispatch {}

/**
 * @description Specific provisioning of Book Store Frontpage API
 */
export interface IBookServiceCompositeForBookStoreFrontpage
  extends IBooksTop3Observe,
    IBooksInSearchObserve,
    IBooksSearchByTitleDispatch {}

/**
 * @description Specific provisioning of Book Store Book Page API
 */
export interface IBookServiceCompositeForBookStoreBooksPage
  extends IBooksObserve,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch,
    IResetSelectedISBNDispatch {}

//#endregion
