import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { FinancesRoutingModule } from './finances-routing.module';

import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { StatsComponent } from './stats/stats.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [
    HomeComponent,
    ExpensesComponent,
    StatsComponent,
    PayrollComponent,
    ItemComponent,
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
