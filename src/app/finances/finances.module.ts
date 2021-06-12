import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    HomeComponent
  ],
})
export class FinancesModule { }
