import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  base_url:string='https://localhost:44310/api/'
  constructor(private http:HttpClient) { }

  addCategory(model: Categories): Observable<Categories> {
    return this.http.post<Categories>(`${this.base_url}Category/AddCategory`, model);
  }
  getCategory(): Observable<Categories> {
    return this.http.get<Categories>(`${this.base_url}Category/GetCategory`);
  }
  getDataById(categoryId: number): Observable<Categories> {
    let params = new HttpParams();
    params = params.append('categoryId', categoryId);
    return this.http.get<Categories>(`${this.base_url}Category/GetCategoryById`, {params: params});
  }
  updateCategory(model: Categories): Observable<Categories> {
    return this.http.put<Categories>(`${this.base_url}Category/UpdateCategory`, model);
  }
  deleteCategory(categoryId: number): Observable<Categories> {
    let params = new HttpParams();
    params = params.append('categoryId', categoryId);
    return this.http.delete<Categories>(`${this.base_url}Category/DeleteCategory`,{params: params});
  }
}
