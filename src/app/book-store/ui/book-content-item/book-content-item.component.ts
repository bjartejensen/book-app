import { Component, Input } from '@angular/core';
import { TBookContentItem } from '../../models/book-store.models';

@Component({
  selector: 'app-book-content-item',
  templateUrl: './book-content-item.component.html',
  styleUrls: ['./book-content-item.component.scss'],
})
export class BookContentItemComponent {
  @Input() item!: TBookContentItem;
}
