import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

interface IBooksObserve {
  books$: Observable<IBookPreview[]>;
}

interface IBooksFetchDispatch {
  booksFetch(): void;
}

export interface IBooksServiceCompositeForFacade
  extends IBooksObserve,
    IBooksFetchDispatch {}
export interface IBookServiceCompositeForBookStoreFrontpage
  extends IBooksObserve {}
