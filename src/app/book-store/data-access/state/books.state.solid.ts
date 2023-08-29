import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

interface IBooksObserve {
  books$: Observable<IBookPreview[]>;
}

interface IBooksFetchDispatch {
  booksFetch(): void;
}

interface ISelectedBookByISBNObserve {
  selectedBookByISBN$: Observable<IBookPreview>;
}

interface ISetSelectedISBNDispatch {
  setSelectedISBN(ISBN: string): void;
}

export interface IBooksServiceCompositeForFacade
  extends IBooksObserve,
    IBooksFetchDispatch,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch {}
export interface IBookServiceCompositeForBookStoreFrontpage
  extends IBooksObserve,
    ISelectedBookByISBNObserve,
    ISetSelectedISBNDispatch {}
