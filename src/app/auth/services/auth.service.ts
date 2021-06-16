import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/user/login`, user)
  }

  register(formData: RegisterForm ): Observable<any> {
    console.log('registering user');
    return this.http.post<any>(`${this.baseUrl}/auth/signin`, formData);
  }

}
