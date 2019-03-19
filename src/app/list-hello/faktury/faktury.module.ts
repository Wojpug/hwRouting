import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakturyComponent } from './faktury.component';
import { FakturyRoutingModule } from './faktury.routing';

@NgModule({
  declarations: [FakturyComponent],
  imports: [
    CommonModule, FakturyRoutingModule
  ]
})
export class FakturyModule { }
