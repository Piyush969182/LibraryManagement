import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './presentation/modules/login/login.component';
import { SignupComponent } from './presentation/modules/signup/signup.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'home',
    loadChildren:()=>import('./presentation/modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'users',
    loadChildren:()=>import('./presentation/modules/users/users.module').then(m=>m.UsersModule)
  },
  {
    path:'books',
    loadChildren:()=>import('./presentation/modules/books/books.module').then(m=>m.BooksModule)
  },
  {
    path:'categories',
    loadChildren:()=>import('./presentation/modules/categories/categories.module').then(m=>m.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
