import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontpageComponent } from './feature/frontpage/frontpage.component';
import { BookStoreRoutingModule } from './book-store-routing.module';
import { BookCoverComponent } from './ui/book-cover/book-cover.component';
import { BookDetailsComponent } from './ui/book-details/book-details.component';
import { BookContentComponent } from './ui/book-content/book-content.component';
import { BookCardComponent } from './ui/book-card/book-card.component';

@NgModule({
  declarations: [FrontpageComponent, BookCoverComponent, BookDetailsComponent, BookContentComponent, BookCardComponent],
  imports: [CommonModule, BookStoreRoutingModule],
})
export class BookStoreModule {}
