import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/modules/login/login.component';
import { SignupComponent } from './presentation/modules/signup/signup.component';
import { HomeComponent } from './presentation/modules/home/home.component';
import { UsersComponent } from './presentation/modules/users/users.component';
import { UserlistComponent } from './presentation/modules/users/userlist/userlist.component';
import { AdduserComponent } from './presentation/modules/users/adduser/adduser.component';
import { EdituserComponent } from './presentation/modules/users/edituser/edituser.component';
import { BooksComponent } from './presentation/modules/books/books.component';
import { CategoriesComponent } from './presentation/modules/categories/categories.component';
import { BooklistComponent } from './presentation/modules/books/booklist/booklist.component';
import { AddbookComponent } from './presentation/modules/books/addbook/addbook.component';
import { EditbookComponent } from './presentation/modules/books/editbook/editbook.component';
import { CategorylistComponent } from './presentation/modules/categories/categorylist/categorylist.component';
import { AddcategoryComponent } from './presentation/modules/categories/addcategory/addcategory.component';
import { EditcategoryComponent } from './presentation/modules/categories/editcategory/editcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UsersComponent,
    UserlistComponent,
    AdduserComponent,
    EdituserComponent,
    BooksComponent,
    CategoriesComponent,
    BooklistComponent,
    AddbookComponent,
    EditbookComponent,
    CategorylistComponent,
    AddcategoryComponent,
    EditcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
