import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import material design module
import { MaterialModule } from '@angular/material/bundles/material.umd.js';
//import my
import {SharedModule} from '../shared/shared.module';
import { TestComponent } from './test.component';
//import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie.details.component';
//import { SearchService } from './search.service';
//importing my routes   
import movieRoutes from './movie.routes'



@NgModule({
    imports: [ CommonModule, movieRoutes, SharedModule,
              MaterialModule.forRoot(),
           ],
    //providers: [ SearchService ],
    declarations: [ /* MoviesComponent*/TestComponent , MovieComponent ],
})
export class MovieModule {
    static movieroutes = movieRoutes;
     }


