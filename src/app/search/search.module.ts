import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import material design module
import { MaterialModule } from '@angular/material/bundles/material.umd.js';
//import my 
import { PageNum } from '../common/page.number.component';
import { SearchComponent } from './search.component';
import { Movie } from './item.component';
import { Poster } from '../common/image.or.not.component'
import { SearchService } from './search.service';
//importing my routes   
import searchRoutes from './search.routes'



@NgModule({
    imports: [CommonModule, searchRoutes,
              MaterialModule.forRoot(),
           ],
    providers: [SearchService],
    declarations: [Movie, PageNum,SearchComponent,Poster]

})
export class SearchModule {
    static routes = searchRoutes;
     }


