import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import material design module
import { MaterialModule } from '@angular/material/bundles/material.umd.js';
//import my 
import { PageNum } from '../common/page.number.component';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie.details.component';
import { Movie } from './movie.item.component';
import { Poster } from '../common/image.or.not.component'
import { SearchService } from './search.service';
//importing my routes   
import movieRoutes from './movie.routes'



@NgModule({
    imports: [ CommonModule, movieRoutes,
              MaterialModule.forRoot(),
           ],
    providers: [ SearchService ],
    declarations: [ Movie, PageNum, MoviesComponent, Poster, MovieComponent ],
    exports : [ Movie, Poster, PageNum ]

})
export class MovieModule {
    static movieroutes = movieRoutes;
     }


