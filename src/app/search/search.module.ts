import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
//import material design module
import { MaterialModule } from '@angular/material/bundles/material.umd.js';
//import my

import {MovieModule} from '../movie/movie.module';

//import { PageNum } from '../common/page.number.component';
import { SearchComponent } from './search.component';
//import { MovieComponent } from '../movie/movie.component';
//import { Movie } from '../movie/movie.item.component';
//import { Poster } from '../common/image.or.not.component'
 //import { SearchService } from './search.service';
//importing my routes   
import searchRoutes from './search.routes'



@NgModule({
    imports: [CommonModule, searchRoutes,MovieModule,
              MaterialModule.forRoot(),
           ],
   // exports: [SearchComponent],
//providers: [SearchService],
    declarations: [SearchComponent/*,Poster,Movie, PageNum,MovieComponent*/]

})
export  class SearchModule {
    static routes = searchRoutes;
     }


