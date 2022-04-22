import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'users',
        loadChildren:()=>import('../users/users.module').then(m=>m.UsersModule)
      },
      {
        path:'books',
        loadChildren:()=>import('../books/books.module').then(m=>m.BooksModule)
      },
      {
        path:'categories',
        loadChildren:()=>import('../categories/categories.module').then(m=>m.CategoriesModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
