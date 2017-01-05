import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService, Movie } from './search.module';
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
  constructor(public route: ActivatedRoute,
    public searchService: SearchService) {
  }

  ngOnInit() {
    // this.movieData = {
    //   vote_average: 5,
    //   vote_count: 9,
    //   release_date: 'today',
    //   original_language: 'en'
    // };
    // this.movies = [];
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
    this.movies = res.results;
    console.log(this.movies, 'this.movies');
  }
}
