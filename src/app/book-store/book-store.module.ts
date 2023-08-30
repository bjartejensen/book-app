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

import { OverlayModule } from '@angular/cdk/overlay';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BookContentItemComponent } from './ui/book-content-item/book-content-item.component';
import { BookPreviewComponent } from './ui/book-preview/book-preview.component';
import { TabContentSizeDirective } from './ui/directives/tab-content-size.directive';
import { MaxWidthDirective } from './feature/directives/max-width.directive';
import { TabParentContentSizeDirective } from './ui/directives/tab-parent-content-size.directive';

@NgModule({
  declarations: [
    FrontpageComponent,
    BookCoverComponent,
    BookDetailsComponent,
    BookContentComponent,
    BookCardComponent,
    BookForewordComponent,
    BookContentItemComponent,
    BookPreviewComponent,
    TabContentSizeDirective,
    MaxWidthDirective,
    TabParentContentSizeDirective,
  ],
  imports: [
    CommonModule,
    BookStoreRoutingModule,
    StoreModule.forFeature(BOOKS_FEATURE_KEY, fromBooks.booksReducer),
    MatTabsModule,
    MatIconModule,
    OverlayModule,
  ],
})
export class BookStoreModule {}
