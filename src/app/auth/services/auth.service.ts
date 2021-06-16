import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginForm, RegisterForm } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  login(formData: LoginForm): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, formData)
      .pipe(
        tap((resp) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }

  register(formData: RegisterForm): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user`, formData)
      .pipe(
        tap((resp) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }

}
