import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgIf} from 'angular2/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
//my imports
import { PageNum } from '../page.number.component';
import {FindReturnedData } from '../models/find.models';
import { SearchService} from './search.service';
import {  Movie } from '../movie/movie.item.component';
@Component({
  selector: 'searchbar',
  styles: [`
  `],
  providers: [SearchService, Movie, PageNum, RouterModule],
  templateUrl: 'searchbar.html'
})
export class SearchbarComponent { 
   localState: any;
  movies: any;
  searchData: FindReturnedData;
  value: string;
  pagesArray: Array<number>
  searched: boolean;
  morePages: boolean;
  nextPage: boolean;
  previousPage:boolean;
  i:number;
  constructor(public route: ActivatedRoute,
    public searchService: SearchService) {
  }

  ngOnInit() {
     this.i=1;
    this.value = '';
    this.pagesArray=[1];    
    this.searched=false;
    this.morePages=false;
    this.nextPage=false;
    this.previousPage=false;
    
    console.log('hello `SEARCHBAR` component');
  }
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

}
