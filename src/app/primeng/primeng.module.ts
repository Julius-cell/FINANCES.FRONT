import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  exports: [
    ButtonModule,
    ToastModule,
    AvatarModule
  ]
})
export class PrimengModule { }
