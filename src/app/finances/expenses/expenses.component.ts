import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
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

  public expenseForm = this.fb.group({
    name: [, [Validators.required]],
    amount: [, [Validators.required]]
  })

  constructor(private router: Router,
    private fb: FormBuilder,
    private storageService: LocalStorageService,
    private authService: AuthService) { }

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
    this.storageService.addExpense(this.expenseForm.value);
  }

  setExpense() {
    this.expenses = this.storageService.getExpenses();
  }

  closeDialogExpense() {
    this.dialogExpense = false;
  }
  
  submitPage() {
    this.savePayrollInDB();
    this.goToDashboard();
  }

  goToDashboard() {
    this.router.navigate(['/finances/dashboard']);
  }

  savePayrollInDB() {
    console.log(this.userId);
  }

  getUserId() {
    this.authService.getUserInfo().subscribe(res => {
      this.userId = res._id;
    });
  }
  
}
