import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ColorChangeButtonComponent } from './color-change-button/color-change-button.component';
import { colorReducer } from './state/color.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeButtonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ color: colorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
