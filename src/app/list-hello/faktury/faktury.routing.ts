import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakturyComponent } from './faktury.component';

const routes: Routes = [
  {
    path: '',
    component: FakturyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FakturyRoutingModule {}
