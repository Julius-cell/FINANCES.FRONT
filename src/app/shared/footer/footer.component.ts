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
    console.log('holi');
    
    this.router.navigate(['finances/expenses']);
  }
  
  goEdit() {
    this.router.navigate(['finances/payroll']);
  }
  
  goStats() {
    this.router.navigate(['finances/stats']);
  }

}
