import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { PrimengModule } from '../primeng/primeng.module';
import { FinancesRoutingModule } from './finances-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FinancesRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
})
export class FinancesModule { }
