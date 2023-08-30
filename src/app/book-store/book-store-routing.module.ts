import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './feature/frontpage/frontpage.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
    title: 'Book store app',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookStoreRoutingModule {}
