import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBookPreview } from '../../models/book-store.models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: IBookPreview;
  @Output() ISBNEmitter = new EventEmitter<string>();
}
