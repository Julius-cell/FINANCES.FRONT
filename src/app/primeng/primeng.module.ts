import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChartModule } from 'primeng/chart';

@NgModule({
  exports: [
    ButtonModule,
    ToastModule,
    AvatarModule,
    InputTextModule,
    InputNumberModule,
    ChartModule
  ]
})
export class PrimengModule { }
