import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Payroll } from '../models/payroll';
import { FinanceService } from '../services/finance.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'fin-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public dialogExpense!: boolean;
  public expenses: any[] = [];
  public userId: string = '';
  public payroll!: Payroll;
  public userInfo: any;

  public expenseForm = this.fb.group({
    name: [, [Validators.required]],
    amount: [, [Validators.required]]
  })

  constructor(private router: Router,
    private fb: FormBuilder,
    private storageService: LocalStorageService,
    private authService: AuthService,
    private financeService: FinanceService) { }

  ngOnInit(): void {
    this.setExpense();
    this.getUserId();
  }

  openDialogExpense() {
    this.dialogExpense = true;
  }

  saveExpenseButton() {
    this.saveExpenseInLocalStorage();
    this.setExpense();
    this.closeDialogExpense();
  }

  saveExpenseInLocalStorage() {
    const name = this.expenseForm.controls.name.value;
    const amount = this.expenseForm.controls.amount.value;    
    this.storageService.addExpense({[name]: amount});
  }

  setExpense() {
    this.expenses = this.storageService.getExpenses();
  }

  closeDialogExpense() {
    this.dialogExpense = false;
  }
  
  submitPage() {
    this.setPayroll();
    this.savePayrollInDB();
    this.goToDashboard();
  }

  goToDashboard() {
    this.router.navigate(['/finances/dashboard']);
  }

  savePayrollInDB() {
    this.financeService.createPayroll(this.payroll, this.userId).subscribe(res => {
      console.log(res);
    });
  }

  getUserId() {
    this.authService.getUserInfo().subscribe(res => {
      this.userId = res._id;
    });
  }

  setPayroll() {
    this.payroll = this.storageService.getPayroll();
  }
  
}
