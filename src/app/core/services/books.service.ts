import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookIssue } from '../models/bookIssue.model';
import { Books } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  base_url: string = 'https://localhost:44310/api/'
  constructor(private http: HttpClient) { }

  addBook(model: Books): Observable<Books> {
    return this.http.post<Books>(`${this.base_url}Books/AddBooks`, model);
  }
  getBooks(): Observable<Books> {
    return this.http.get<Books>(`${this.base_url}Books/GetBooks`);
  }
  getBookById(bookId: number): Observable<Books> {
    let params = new HttpParams();
    params = params.append('bookId', bookId);
    return this.http.get<Books>(`${this.base_url}Books/GetBooksById`, { params: params });
  }
  updateBook(model: Books): Observable<Books> {
    return this.http.put<Books>(`${this.base_url}Books/UpdateBooks`, model);
  }
  deletebook(bookId: number): Observable<Books> {
    let params = new HttpParams();
    params = params.append('bookId', bookId);
    return this.http.delete<Books>(`${this.base_url}Books/DeleteBooks`, { params: params });
  }
  bookIssue(model: BookIssue): Observable<BookIssue> {
    return this.http.post<BookIssue>(`${this.base_url}Books/BookIssue`, model);
  }
}
