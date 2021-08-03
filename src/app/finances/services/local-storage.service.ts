import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private incomes = 'incomes';
  private expenses = 'expenses';


  constructor() {
    this.setLocalStorage();
  }

  addIncome(newIncome: any) {
    const currentsIncomes = this.getIncomes();
    localStorage.setItem(this.incomes, JSON.stringify([...currentsIncomes, newIncome]));
  }
  
  removeIncome(income: any) {
    const currentsIncomes = this.getIncomes();
    const persist = currentsIncomes.filter((el: any) => el.name !== income.name);
    localStorage.setItem(this.incomes, JSON.stringify([...persist]));
  }
  
  getIncomes() {
    const incomes = JSON.parse(localStorage.getItem(this.incomes)!);
    return incomes;
  }

  addExpense(newExpense: any) {
    const currentExpenses = this.getExpenses();
    localStorage.setItem(this.expenses, JSON.stringify([...currentExpenses, newExpense]));
  }

  removeExpense(expense: any) {
    const currentExpenses = this.getExpenses();
    const persist = currentExpenses.filter((el: any) => el.name !== expense.name);
    localStorage.setItem(this.expenses, JSON.stringify([...persist]));
  }

  getExpenses() {
    const expenses = JSON.parse(localStorage.getItem(this.expenses)!);
    return expenses;
  }

  private setLocalStorage() {
    const currentIncomes = JSON.parse(localStorage.getItem(this.incomes)!);
    const currentExpenses = JSON.parse(localStorage.getItem(this.expenses)!);
    if (!currentIncomes || !currentExpenses) {
      localStorage.setItem(this.incomes, JSON.stringify([]));
      localStorage.setItem(this.expenses, JSON.stringify([]));
    }
  }

}
