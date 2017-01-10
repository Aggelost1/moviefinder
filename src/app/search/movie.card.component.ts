import { Component, Input } from '@angular/core';
import {FindMovieData, UrlList } from '../common/models/find.models';
import { Poster } from '../common/image.or.not.component'

@Component({
    selector: 'movieItem',
    styles: [`
  `],
    templateUrl: 'movie.card.html', 
     providers: [Poster],
})
export class Movie {
   
    @Input() movie: FindMovieData;
    url : UrlList = new UrlList();
    public  imagePath = 'http://image.tmdb.org/t/p/w185/';
    ngOnInit() {
      this.url.first=this.imagePath;
        this.url.second=this.movie.poster_path;   
        }
    }
