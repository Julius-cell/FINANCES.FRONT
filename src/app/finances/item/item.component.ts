import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fin-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public itemForm;

  constructor(private fb: FormBuilder) { 
    this.itemForm = this.fb.group({
      name: ['', [Validators.required]],
      amount: [0, [Validators.required]]
    })
  }
  
  ngOnInit(): void {}
}
