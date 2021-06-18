import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginForm, RegisterForm } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';    
    return this.http.get<any>(`${this.baseUrl}/auth/renew`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token)
      }),
      map(res => true),
      catchError(err => of(false))
    )
  }

  login(formData: LoginForm): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, formData)
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token)
        })
      );
  }

  loginGoogle(token: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login/google`, { token })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token)
        })
      );
  }

  register(formData: RegisterForm): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user`, formData)
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token)
        })
      );
  }

}
