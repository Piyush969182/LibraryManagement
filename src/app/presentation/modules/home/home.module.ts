import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UsersComponent } from '../users/users.component';
import { UserlistComponent } from '../users/userlist/userlist.component';
import { EdituserComponent } from '../users/edituser/edituser.component';
import { AdduserComponent } from '../users/adduser/adduser.component';
import { CategoriesComponent } from '../categories/categories.component';
import { BooksComponent } from '../books/books.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  declarations: [
    UsersComponent,
    BooksComponent,
    CategoriesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
