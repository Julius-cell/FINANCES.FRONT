import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@NgModule({
  exports: [
    ButtonModule,
    ToastModule
  ]
})
export class PrimengModule { }
