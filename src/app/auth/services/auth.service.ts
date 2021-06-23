import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginForm, RegisterForm } from '../models/user';
import { Router } from '@angular/router';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth2: any;
  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient,
              private router: Router,
              private ngZone: NgZone) {
    this.googleInit();
  }

  googleInit() {
    // TIP: A diferencia de los Observables, las Promesas siempre se inicializan,
    // los Observables alguien tiene que estar suscrito.
    return new Promise<void>(resolve => {

      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: '581195233399-c5am8u85bqul9o4jorkuhvudo0sbpu5m.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    })
  }

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

  logout() {
    localStorage.removeItem('token');
    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/auth');
      })
    });
  }

}
