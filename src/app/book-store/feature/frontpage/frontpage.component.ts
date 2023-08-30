import { Component, inject, OnInit } from '@angular/core';
import { IBookServiceCompositeForBookStoreFrontpage } from '../../data-access/state/books.state.solid';
import { BOOKS_FACADE_TOKEN } from '../../data-access/state/books.state.facade';
import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent implements OnInit {
  //#region D.I

  private booksService: IBookServiceCompositeForBookStoreFrontpage =
    inject(BOOKS_FACADE_TOKEN);

  //#endregion

  //#region Observables

  /**
   * @description List of books to preview. Fetched from the NgRx store
   * via the provisioned service api
   * @returns IBookPreview[]
   */
  books$: Observable<IBookPreview[]> = this.booksService.books$;

  /**
   * @description Instance of the user-selected book. Undefined in case of no user selection
   * @returns IBookPreview
   */
  selectedBookByISBN$: Observable<IBookPreview | undefined> =
    this.booksService.selectedBookByISBN$;

  //#endregion

  //#region Life Cycle

  ngOnInit(): void {
    this.booksService.setSelectedISBN('978-0-141-99106-2');
  }

  //#endregion

  //#region Public Methods

  /**
   * @description Allowing the user to preview a book.
   * The provided unique ISBN will be sent to the NgRx store via the book service
   * and trigger a selectedBookByISBN$ emission.
   * @param ISBN
   */
  onSelectedISBN(ISBN: string): void {
    this.booksService.setSelectedISBN(ISBN);
  }

  /**
   * @description Allowing the user to reset the selected preview.
   * This method is currently bound to the event binding with the
   * modal in the associated template
   */
  onResetSelectedBookByISIN(): void {
    this.booksService.resetSelectedISBN();
  }

  //#endregion
}
