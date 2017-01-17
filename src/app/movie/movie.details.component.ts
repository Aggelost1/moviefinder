import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgIf} from 'angular2/common';
import { ActivatedRoute } from '@angular/router';
//my imports
import {FindReturnedData } from '..//common/models/find.models';
import { FetchService} from './fetch.movie.service';
import {  Movie } from './movie.item.component';

@Component({
  selector: 'movieDetail',
  styles: [`
  `],
  providers: [FetchService, Movie, ],
  templateUrl: 'movie.details.html'
})
export class MovieComponent {
  localState: any;
  movies: any;
  aquired :boolean;
  constructor(public route: ActivatedRoute,
    public fetchService: FetchService) {
  }

  ngOnInit() {
    this.aquired=false;
    this.fetchMovie(this.route.snapshot.params['id'] );
    console.log('hello there `movie` component');
     console.log('ID',  this.route.snapshot.params['id']);
}


  public fetchMovie(value: string) {
    this.fetchService.movieFetch(value )
  .subscribe( res => this.handleMovieData(res) );
}
 public handleMovieData(res: FindReturnedData) {
      this.movies = res;
      console.log('this.movies', this.movies);
      //this ensures we have the data before we ask the html to display it
      this.aquired=true;
  }
}
