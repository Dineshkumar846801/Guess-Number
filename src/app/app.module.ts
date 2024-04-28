import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuessNumber } from './number-guess/guessnumber.component';

@NgModule({
  declarations: [AppComponent, GuessNumber],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
