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
  searchData: any;
  constructor(public route: ActivatedRoute,
    public searchService: SearchService) {
  }

  ngOnInit() {
<<<<<<< Updated upstream
    // this.movieData = {
    //   vote_average: 5,
    //   vote_count: 9,
    //   release_date: 'today',
    //   original_language: 'en'
    // };
    // this.movies = [];
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    this.movies = res.results;
    console.log(this.movies, 'this.movies');
=======
      this.searchData = res;
      this.movies = res.results;
      console.log(this.movies, 'this.movies', this.searchData);
>>>>>>> Stashed changes
  }
}
