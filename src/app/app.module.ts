import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorChangeButtonComponent } from './color-change-button/color-change-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
