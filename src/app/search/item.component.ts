import { Component, Input } from '@angular/core';
import {MovieData } from './search.data.classes';

@Component({
    selector: 'movieItem',
    styles: [`
  `],
    templateUrl: 'item.html',
})
export class Movie {

    @Input() movie: MovieData;
   
    public  imagePath = 'http://image.tmdb.org/t/p/w185/';
    ngOnInit() {
        if (this.movie.poster_path == null ) {
            this.imagePath = 'assets/img/noImage.jpg';
           }
        }
    }




