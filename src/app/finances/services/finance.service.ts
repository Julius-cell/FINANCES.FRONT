import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Payroll } from '../models/payroll';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createPayroll(payroll: Payroll, id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/finances/${id}`, payroll)
    .pipe(map((res: any) => res.data.user));
  }

}
