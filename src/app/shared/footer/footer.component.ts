import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['finances/dashboard']);
  }
  
  goEdit() {
    this.router.navigate(['finances/incomes']);
  }
  
  goStats() {
    this.router.navigate(['finances/stats']);
  }

}
