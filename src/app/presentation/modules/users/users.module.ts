import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    UserlistComponent,
    AdduserComponent,
    EdituserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class UsersModule { }
