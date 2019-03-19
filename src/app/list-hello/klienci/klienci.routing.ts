import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlienciComponent } from './klienci.component';

const routes: Routes = [
  {
    path: '',
    component: KlienciComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KlienciRoutingModule {}
