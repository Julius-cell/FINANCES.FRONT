import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule { }
