import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { FinancesRoutingModule } from './finances-routing.module';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { IncomesComponent } from './incomes/incomes.component';
import { ItemComponent } from './item/item.component';
import { ExpensesComponent } from './expenses/expenses.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    StatsComponent,
    IncomesComponent,
    ItemComponent,
    ExpensesComponent,
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
