import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  exports: [
    ButtonModule,
    ToastModule,
    AvatarModule,
    InputTextModule,
    InputNumberModule
  ]
})
export class PrimengModule { }
