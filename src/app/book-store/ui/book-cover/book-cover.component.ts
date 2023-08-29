import { Component, Input } from '@angular/core';
import { IBookCover } from '../../models/book-store.models';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.scss'],
})
export class BookCoverComponent {
  @Input() bookCover!: IBookCover;
}
