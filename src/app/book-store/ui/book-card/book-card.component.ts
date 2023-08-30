import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBookPreview } from '../../models/book-store.models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: IBookPreview;

  /**
   * @description Allow the user to select a book to preview. The event emitter will
   * trigger an event in the associated SMART-component which in turn will invoke
   * action, reducer and selector in the NgRx store
   */
  @Output() ISBNEmitter = new EventEmitter<string>();
}
