import { Component, Input } from '@angular/core';
import { IBookContent } from '../../models/book-store.models';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss'],
})
export class BookContentComponent {
  @Input() bookContent!: IBookContent;
}
