import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ListHelloModule } from './list-hello/list-hello.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule, ListHelloModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
