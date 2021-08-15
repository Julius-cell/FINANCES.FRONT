import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'fin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public incomes: any[] = [];
  public totalIncome: number = 0;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getIncomes();
  }

  getIncomes() {
    this.authService.getUserInfo().subscribe(res => {
      const incomes = res.accounts[0].incomes;
      this.sumIncomesAmounts(incomes);
    });
  }

  getExpenses() {
    this.authService.getUserInfo().subscribe(res => {
      const expenses = res.accounts[0].expenses;
    });
  }

  sumIncomesAmounts(incomes) {
    const amounts = incomes.map(income => Object.values(income));
    this.totalIncome = amounts.reduce((acc, val) => parseInt(acc) + parseInt(val));
  }

}
