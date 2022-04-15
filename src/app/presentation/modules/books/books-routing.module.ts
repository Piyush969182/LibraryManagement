import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookReturnComponent } from './book-return/book-return.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BooksComponent } from './books.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  {
    path:'',
    component:BooksComponent,
  },
  {
    path:'list',
    component:BooklistComponent
  },
  {
    path:'add',
    component:AddbookComponent
  },
  {
    path:'edit/:bookId',
    component:EditbookComponent
  },
  {
    path:'bookissue',
    component:BookIssueComponent
  },
  {
    path:'bookreturn',
    component:BookReturnComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
