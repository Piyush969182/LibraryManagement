import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private Service: UsersService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=this.Service.getToken();
    if(token){
      const request= req.clone({headers:req.headers.set('Authorization',`Bearer ${token}`)})
      return next.handle(request);
    }
    return next.handle(req);
  }
}
