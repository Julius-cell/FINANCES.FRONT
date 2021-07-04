import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
