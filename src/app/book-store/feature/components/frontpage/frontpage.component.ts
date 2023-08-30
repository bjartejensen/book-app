import { Component, inject } from '@angular/core';
import { IBookServiceCompositeForBookStoreFrontpage } from '../../../data-access/state/books.state.solid';
import { BOOKS_FACADE_TOKEN } from '../../../data-access/state/books.state.facade';
import { combineLatest, map, Observable } from 'rxjs';
import { IBookPreview } from '../../../models/book-store.models';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent {
  //#region D.I

  private booksService: IBookServiceCompositeForBookStoreFrontpage =
    inject(BOOKS_FACADE_TOKEN);

  //#endregion

  //#region Observables

  /**
   * @description List of Top 3 books. Fetched from the NgRx store
   * via the provisioned service api
   * @returns IBookPreview[]
   */

  booksCombined$: Observable<IBookPreview[]> = combineLatest([
    this.booksService.booksTop3$,
    this.booksService.booksInSearch$,
  ]).pipe(
    map(([top3, booksInSearch]) => {
      return booksInSearch && booksInSearch.length > 0 ? booksInSearch : top3;
    })
  );

  //#endregion

  //#region Public Methods

  onBookSearch(titleSearch: string) {
    this.booksService.booksSearchByTitleDispatch(titleSearch);
  }

  //#endregion
}
