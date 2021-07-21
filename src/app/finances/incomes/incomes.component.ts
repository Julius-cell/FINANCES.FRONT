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

  @ViewChild('item', {read: ViewContainerRef}) item;

  constructor(private authService: AuthService,
              private injector: Injector,
              private cfr: ComponentFactoryResolver,
              private router: Router) { }

  ngOnInit(): void {}
  
  logout() {
    this.authService.logout();
  }

  addItemComponent() {
    const cmpFactory = this.cfr.resolveComponentFactory(ItemComponent);
    const componentRef = cmpFactory.create(this.injector);
    this.item.insert(componentRef.hostView);
  }

  getData() {
    let items: any[] = [];
    const data = document.querySelectorAll('fin-item');
    data.forEach(item => {
      const key = item.children[0][0].value.toLowerCase();
      const amount = parseInt((item.children[0][1].value).match(/\d+/g).join(''));
      items.push({ [key]: amount });
    });    
  }

  goToExpenses() {
    this.router.navigate(['finances/expenses']);
  }

  submitPage() {
    this.getData();
    this.goToExpenses();
  }

}
