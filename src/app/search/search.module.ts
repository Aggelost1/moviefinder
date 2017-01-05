import { NgModule } from '@angular/core';
import { SearchService } from './search.service';
import { Movie } from './item.component';
import { SearchComponent } from './search.component';



@NgModule({}) 
export class SearchModule {
    static forRoot() {
        return {
            NgModule: SearchModule,
            providers: [SearchService, Movie, SearchComponent]
        }
    }
   

}
export {SearchService, Movie, SearchComponent}
