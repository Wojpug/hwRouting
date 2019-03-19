import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHelloComponent } from './list-hello.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListHelloComponent,
    children: [
      {
        path: 'klienci',
        loadChildren: './klienci/klienci.module#KlienciModule'
      },
      {
        path: 'faktury',
        loadChildren: './faktury/faktury.module#FakturyModule'
      }
    ]
  }

];

@NgModule({
  declarations: [ListHelloComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ListHelloModule {}
