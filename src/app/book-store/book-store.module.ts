import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontpageComponent } from './feature/components/frontpage/frontpage.component';
import { BookStoreRoutingModule } from './book-store-routing.module';
import { BookCoverComponent } from './ui/book-cover/book-cover.component';
import { BookDetailsComponent } from './ui/book-details/book-details.component';
import { BookCardComponent } from './ui/book-card/book-card.component';
import { BookForewordComponent } from './ui/book-foreword/book-foreword.component';
import { StoreModule } from '@ngrx/store';
import { BOOKS_FEATURE_KEY } from './data-access/state/books.state.models';
import * as fromBooks from './data-access/state/books.state.reducers';

import { OverlayModule } from '@angular/cdk/overlay';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { BookContentItemComponent } from './ui/book-content-item/book-content-item.component';
import { BookPreviewComponent } from './ui/book-preview/book-preview.component';
import { TabContentSizeDirective } from './ui/directives/tab-content-size.directive';
import { MaxWidthDirective } from './feature/directives/max-width.directive';
import { TabParentContentSizeDirective } from './ui/directives/tab-parent-content-size.directive';
import { BookPageComponent } from './feature/components/book-page/book-page.component';
import { BookSearchComponent } from './ui/book-search/book-search.component';

@NgModule({
  declarations: [
    FrontpageComponent,
    BookCoverComponent,
    BookDetailsComponent,
    BookCardComponent,
    BookForewordComponent,
    BookContentItemComponent,
    BookPreviewComponent,
    TabContentSizeDirective,
    MaxWidthDirective,
    TabParentContentSizeDirective,
    BookPageComponent,
    BookSearchComponent,
  ],
  imports: [
    CommonModule,
    BookStoreRoutingModule,
    StoreModule.forFeature(BOOKS_FEATURE_KEY, fromBooks.booksReducer),
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class BookStoreModule {}
