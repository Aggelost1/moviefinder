import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import {MovieInit} from './item.component';

@Component({
  selector: 'search',
  styles: [`
  `],
  providers: [SearchService, MovieInit],
  templateUrl: 'search.html'
  
})
export class SearchComponent {
  localState: any;
  value: string;
  moviesdata: any;
  moviesList: any;
  constructor(public route: ActivatedRoute, public searchService: SearchService, public movieInit: MovieInit ) {
  }

  ngOnInit() {
      this.value = ' 0 ';
      this.moviesdata = JSON.stringify( {page: 0 , results: 2, total_results: 0, total_pages: 0});

      this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from rarch hereoute
        this.localState = data.yourData;
      });

    console.log('hello `Search` component');
  }

  public onEnter = (value: string) => {
      this.moviesdata = 14;
      this.value = value;
      this.searchMovie(value);
  }
  public searchMovie(value: string) {
      this.moviesdata = 15
      this.searchService.movieSearch(value)
          .subscribe((res) => { this.handleMovieData(res); });
  }
  public handleMovieData(res: Object) {
      console.log(res);
      
      this.moviesdata = res;
      console.log(this.moviesdata);
      console.log(12);
 
      this.moviesList = this.moviesdata.results[1].original_title;
      console.log(this.moviesList);
      return;
  }

  // asyncDataWithWebpack() {
  //   // you can also async load mock data with 'es6-promise-loader'
  //   // you would do this if you don't want the mock-data bundled
  //   // remember that 'es6-promise-loader' is a promise
  //   setTimeout(() => {

  //     System.import('../../assets/mock-data/mock-data.json')
  //       .then(json => {
  //         console.log('async mockData', json);
  //         this.localState = json;
  //       });

  //   });
  // }

}
