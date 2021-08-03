import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fin-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() data: any;

  constructor() {}
  
  ngOnInit(): void {}
}
