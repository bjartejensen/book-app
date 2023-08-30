import { Component, Input } from '@angular/core';
import { IBookPreview } from '../../models/book-store.models';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() bookPreview?: IBookPreview | null;
}
