import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public dialogExpense!: boolean;
  public expenses: any[] = [];

  public expenseForm = this.fb.group({
    name: [, [Validators.required]],
    amount: [, [Validators.required]]
  })

  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {}

  goToDashboard() {
    this.router.navigate(['/finances/dashboard']);
  }

  submitPage() {
    this.goToDashboard();
  }

}
