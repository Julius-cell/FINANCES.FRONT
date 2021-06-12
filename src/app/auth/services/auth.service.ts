import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/user/login`, user)
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/user/signup`, user);
  }

}
