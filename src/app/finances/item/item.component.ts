import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fin-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() data: any;
  public name: string = '';
  public amount: any;

  constructor() {}
  
  ngOnInit(): void {
    this.name = Object.keys(this.data)[0];
    this.amount = Object.values(this.data)[0];
  }
}
