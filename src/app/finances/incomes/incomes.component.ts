import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'fin-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  constructor(private authService: AuthService,
              private injector: Injector,
              private cfr: ComponentFactoryResolver,
              private router: Router) { }

  ngOnInit(): void {}
  
  logout() {
    this.authService.logout();
  }

  addIncome() {
    
  }

  goToExpenses() {
    this.router.navigate(['finances/expenses']);
  }

  submitPage() {
    this.goToExpenses();
  }

}
