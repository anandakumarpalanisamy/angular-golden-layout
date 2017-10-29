import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { GoldenLayoutComponent } from './layout/golden-layout/golden-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GoldenLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
