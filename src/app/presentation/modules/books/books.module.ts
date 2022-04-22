import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookReturnComponent } from './book-return/book-return.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    BooklistComponent,
    AddbookComponent,
    EditbookComponent,
    BookIssueComponent,
    BookReturnComponent,
  ],
  imports: [
 
    CommonModule,
    BooksRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    DatepickerModule,
    HttpClientModule
  ]
})
export class BooksModule { }
