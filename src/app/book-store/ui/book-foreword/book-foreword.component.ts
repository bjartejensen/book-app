import { Component, Input } from '@angular/core';
import { IBookForeword } from '../../models/book-store.models';

@Component({
  selector: 'app-book-foreword',
  templateUrl: './book-foreword.component.html',
  styleUrls: ['./book-foreword.component.scss'],
})
export class BookForewordComponent {
  @Input() bookForeword?: IBookForeword;
}
