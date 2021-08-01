import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'fin-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  public dialogIncome!: boolean;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {}
  
  logout() {
    this.authService.logout();
  }

  openDialogIncome() {
    this.dialogIncome = true;
  }

  goToExpenses() {
    this.router.navigate(['finances/expenses']);
  }

  submitPage() {
    this.goToExpenses();
  }

  saveIncomeInLocalStorage() {
    this.closeDialogIncome();
  }

  closeDialogIncome() {
    this.dialogIncome = false;
  }

}
