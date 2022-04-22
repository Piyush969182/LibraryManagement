import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
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
    canActivate: [AuthGuard],
  },
  {
    path:'list',
    component:BooklistComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'add',
    component:AddbookComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'edit/:bookId',
    component:EditbookComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'bookissue',
    component:BookIssueComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'bookreturn',
    component:BookReturnComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
