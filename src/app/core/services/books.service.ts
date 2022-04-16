import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  base_url:string='https://localhost:44310/api/'
  constructor(private http:HttpClient) { }

  addBook(model: Books): Observable<Books> {
    return this.http.post<Books>(`${this.base_url}Books/AddBooks`, model);
  }
  getBooks(): Observable<Books> {
    return this.http.get<Books>(`${this.base_url}Books/GetBooks`);
  }
}
