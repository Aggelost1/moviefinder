import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material/bundles/material.umd.js';
import { SearchComponent } from './search.component';
import { searchRouting } from './search.routing';
import { SearchService } from './search.service';
import { SharedModule }   from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    searchRouting.routes,
    SharedModule
  ],
  declarations: [
    searchRouting.components
  ],
  providers: [ SearchService ]
})
export class SearchModule { }
