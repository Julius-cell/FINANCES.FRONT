import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'fin-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  @ViewChild('item', {read: ViewContainerRef}) item;

  constructor(private injector: Injector,
              private cfr: ComponentFactoryResolver,
              private router: Router) { }

  ngOnInit(): void {}

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

  goToDashboard() {
    this.router.navigate(['/finances/dashboard']);
  }

  submitPage() {
    this.getData();
    this.goToDashboard();
  }

}
