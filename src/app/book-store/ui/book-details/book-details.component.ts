import { Component, Input } from '@angular/core';
import { IBookDetails } from '../../models/book-store.models';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  @Input() bookDetails!: IBookDetails;
}
