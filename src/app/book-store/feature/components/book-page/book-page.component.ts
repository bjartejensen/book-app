import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BOOKS_FACADE_TOKEN } from 'src/app/book-store/data-access/state/books.state.facade';
import { IBookServiceCompositeForBookStoreBooksPage } from 'src/app/book-store/data-access/state/books.state.solid';
import { IBookPreview } from 'src/app/book-store/models/book-store.models';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent {
  //#region D.I

  private booksService: IBookServiceCompositeForBookStoreBooksPage =
    inject(BOOKS_FACADE_TOKEN);

  //#endregion

  //#region Observables

  /**
   * @description List of Top 3 books. Fetched from the NgRx store
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
