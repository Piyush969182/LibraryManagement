import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { EditbookComponent } from '../books/editbook/editbook.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { CategoriesComponent } from './categories.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';

const routes: Routes = [
  {
    path:'',
    component:CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'list',
    component:CategorylistComponent,
    canActivate: [AuthGuard],
  },
  {    
    path:'add',
    component:AddcategoryComponent,
    canActivate: [AuthGuard],
  },
  {    
    path:'edit/:categoryId',
    component:EditcategoryComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
