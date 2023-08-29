import { Component, inject } from '@angular/core';
import { IBookServiceCompositeForBookStoreFrontpage } from '../../data-access/state/books.state.solid';
import { BOOKS_FACADE_TOKEN } from '../../data-access/state/books.state.facade';
import { Observable } from 'rxjs';
import { IBookPreview } from '../../models/book-store.models';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent {
  private booksService: IBookServiceCompositeForBookStoreFrontpage =
    inject(BOOKS_FACADE_TOKEN);

  books$: Observable<IBookPreview[]> = this.booksService.books$;
}
