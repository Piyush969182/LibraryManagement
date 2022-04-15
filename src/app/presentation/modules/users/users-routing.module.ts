import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from '../books/booklist/booklist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent,
    children:[
      {
        path:'list',
        component:UserlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
