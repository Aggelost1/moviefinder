import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule, FormsModule, HttpModule],
  // providers: [] // these would be multi-instance
})
export class SharedModule { }
