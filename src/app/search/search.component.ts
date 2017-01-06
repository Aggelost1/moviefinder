import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService} from './search.service';
import {  Movie } from './item.component';

@Component({
  selector: 'search',
  styles: [`
  `],
  providers: [SearchService, Movie],
  templateUrl: 'search.html'
})
export class SearchComponent {
  localState: any;
  value: string;
  movies: any;
  searchData: any;
  constructor(public route: ActivatedRoute,
    public searchService: SearchService) {
  }

  ngOnInit() {
    this.value = '';
    console.log('hello `Search` component');
  }

  public onEnter = (value: string) => {
    this.value = value;
    this.searchMovie(value);
  }
  public searchMovie(value: string) {
    this.searchService.movieSearch(value)
      .subscribe( res => this.handleMovieData(res) );
  }
  public handleMovieData(res: Object) {
    console.log(this.movies, 'this.movies');
      this.searchData = res;
      this.movies = res.results;
      console.log(this.movies, 'this.movies', this.searchData);

  }
}
