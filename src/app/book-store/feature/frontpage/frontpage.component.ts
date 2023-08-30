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

  books$: Observable<IBookPreview[]> = this.booksService.books$;

  selectedBookByISBN$: Observable<IBookPreview | undefined> =
    this.booksService.selectedBookByISBN$;

  //#endregion

  ngOnInit(): void {
    this.booksService.setSelectedISBN('978-0-141-99106-2');
  }

  //#region Public Methods

  onSelectedISBN(ISBN: string): void {
    this.booksService.setSelectedISBN(ISBN);
  }

  onResetSelectedBookByISIN(): void {
    this.booksService.resetSelectedISBN();
  }

  //#endregion
}
