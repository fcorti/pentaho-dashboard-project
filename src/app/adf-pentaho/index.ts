import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HelloComponent],
  declarations: [HelloComponent]
})
export class AdfPentahoModule { }
