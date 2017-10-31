import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldenLayoutComponent } from './golden-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoldenLayoutComponent
  ],
  exports: [
    GoldenLayoutComponent
  ]
})
export class GoldenLayoutModule { }
