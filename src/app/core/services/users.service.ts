import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
base_url:string='https://localhost:44310/api/'
  constructor(private http:HttpClient) { }

  signUp(model: Users): Observable<Users> {
    return this.http.post<Users>(`${this.base_url}Authenticate/register`, model);
  }
  login(model: Users): Observable<Users> {
    return this.http.post<Users>(`${this.base_url}Authenticate/login`, model);
  }
  getUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.base_url}Users/GetUsers`);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getLoginType(){
    return localStorage.getItem('loginType');
  }
}
