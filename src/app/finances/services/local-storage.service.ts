import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private incomes = 'incomes';


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

  private setLocalStorage() {
    const currents = JSON.parse(localStorage.getItem(this.incomes)!);
    if (!currents) {
      localStorage.setItem(this.incomes, JSON.stringify([]));
    }
  }

}
