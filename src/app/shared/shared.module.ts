import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {  RouterModule,  Routes} from '@angular/router';
//import material design module
import { MaterialModule } from '@angular/material/bundles/material.umd.js';
//import my

//import {MovieModule} from '.../movie/movie.module';

 import { PageNum } from './page.number.component';
//import { SearchComponent } from './search.component';
//import { MovieComponent } from '../movie/movie.component';
import {SearchbarComponent} from './search/searchbar.component';
import {NoComponent} from './no.component';
 import { Movie } from './movie/movie.item.component';
import { Poster } from './image.or.not.component';
 import { SearchService } from './search/search.service';
//importing my routes   
import sharedRoutes from './shared.routes'



@NgModule({
    imports: [CommonModule, sharedRoutes,
              MaterialModule.forRoot(),
           ],
           declarations:[PageNum, Movie, Poster,SearchbarComponent,NoComponent],
           exports : [ PageNum, Movie, Poster,SearchbarComponent,RouterModule],
           
   // exports: [SearchComponent],
providers: [SearchService],
//declarations: [SearchComponent/*,Poster,Movie, PageNum,MovieComponent*/]

})
export  class SharedModule {
   static routes = sharedRoutes;
     }


