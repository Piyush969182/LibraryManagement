import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { BooklistComponent } from '../books/booklist/booklist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'list',
        component:UserlistComponent,
        canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
