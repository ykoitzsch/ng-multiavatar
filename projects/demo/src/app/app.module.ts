import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgMultiavatarComponent } from 'ng-multiavatar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMultiavatarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
