import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditbookComponent } from '../books/editbook/editbook.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { CategoriesComponent } from './categories.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';

const routes: Routes = [
  {
    path:'',
    component:CategoriesComponent
  },
  {
    path:'list',
    component:CategorylistComponent
  },
  {    
    path:'add',
    component:AddcategoryComponent
  },
  {    
    path:'edit/:id',
    component:EditcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
