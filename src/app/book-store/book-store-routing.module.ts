import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './feature/components/frontpage/frontpage.component';
import { BookPageComponent } from './feature/components/book-page/book-page.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
    title: 'Book store app',
  },
  {
    path: 'books',
    component: BookPageComponent,
    title: 'All books',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookStoreRoutingModule {}
