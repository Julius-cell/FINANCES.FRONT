import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/guard/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';
import { IncomesComponent } from './incomes/incomes.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'incomes', component: IncomesComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', redirectTo: 'payroll' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancesRoutingModule { }
