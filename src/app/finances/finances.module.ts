import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { PrimengModule } from '../primeng/primeng.module';
import { FinancesRoutingModule } from './finances-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FinancesRoutingModule
  ],
  exports: [
    HomeComponent
  ],
})
export class FinancesModule { }
