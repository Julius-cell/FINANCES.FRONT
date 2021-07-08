import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'fin-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit, AfterViewInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {}

  logout() {
    this.authService.logout();
  }

}
