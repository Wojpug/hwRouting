import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlienciComponent } from './klienci.component';
import { KlienciRoutingModule } from './klienci.routing';

@NgModule({
  declarations: [KlienciComponent],
  imports: [
    CommonModule, KlienciRoutingModule
  ]
})

export class KlienciModule { }
