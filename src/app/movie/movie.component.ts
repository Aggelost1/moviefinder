import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgIf} from 'angular2/common';
import { ActivatedRoute } from '@angular/router';
//my imports
import { PageNum } from '../common/page.number.component';
import {FindReturnedData } from '..//common/models/find.models';
import { FetchService} from './fetch.movie.service';
import {  Movie } from './movie.card.component';

@Component({
  selector: 'movieDetail',
  styles: [`
  `],
  providers: [FetchService, Movie, PageNum,],
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
/*
//handle the search after users inputs and hits enter
  public onEnter = (value: string, num: number=1) => {
    this.searched = true;
    this.value = value;
    this.searchMovie(value , num);
  }
  public searchMovie(value: string, num: number) {
    this.searchService.movieSearch(value , num)
      .subscribe( res => this.handleMovieData(res) );
  }
  public handleMovieData(res: FindReturnedData) {
      this.searchData = res;
      this.movies = res.results;
      console.log('this.movies', this.movies, 'this.searchData', this.searchData);
      this.CreatePageLinks(this.searchData.total_pages,this.searchData.page)
  }
// give the option of changing page if there are more than 20 results
public CreatePageLinks(total:number,current:number) {
  
  this.pagesArray=[1];
  if(total>1){
    this.morePages=true;
   for(var i=2;i<total+1;i++) {
      this.pagesArray.push(i);
    }
    
  }
  else if (total<2) {this.morePages=false;}
}

 public searchChange(num: number) { 
    this.onEnter(this.value , num);
 }
*/
}
