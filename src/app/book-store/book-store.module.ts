import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontpageComponent } from './feature/frontpage/frontpage.component';
import { BookStoreRoutingModule } from './book-store-routing.module';
import { BookCoverComponent } from './ui/book-cover/book-cover.component';
import { BookDetailsComponent } from './ui/book-details/book-details.component';
import { BookContentComponent } from './ui/book-content/book-content.component';
import { BookCardComponent } from './ui/book-card/book-card.component';
import { BookForewordComponent } from './ui/book-foreword/book-foreword.component';
import { StoreModule } from '@ngrx/store';
import { BOOKS_FEATURE_KEY } from './data-access/state/books.state.models';
import * as fromBooks from './data-access/state/books.state.reducers';

@NgModule({
  declarations: [
    FrontpageComponent,
    BookCoverComponent,
    BookDetailsComponent,
    BookContentComponent,
    BookCardComponent,
    BookForewordComponent,
  ],
  imports: [
    CommonModule,
    BookStoreRoutingModule,
    StoreModule.forFeature(BOOKS_FEATURE_KEY, fromBooks.booksReducer),
  ],
})
export class BookStoreModule {}
