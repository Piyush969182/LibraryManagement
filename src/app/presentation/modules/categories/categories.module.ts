import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CategorylistComponent,
    AddcategoryComponent,
    EditcategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class CategoriesModule { }
