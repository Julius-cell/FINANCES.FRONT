import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'fin-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  public dialogIncome!: boolean;

  public incomeForm = this.fb.group({
    name: [, [Validators.required]],
    amount: [, [Validators.required]]
  })

  constructor(private authService: AuthService,
    private router: Router,
    private storageService: LocalStorageService,
    private fb: FormBuilder) { 
  }

  ngOnInit(): void { }

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
    this.storageService.addIncome(this.incomeForm.value);
  }

  closeDialogIncome() {
    this.dialogIncome = false;
  }

}
