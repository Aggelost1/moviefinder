import { Component, Input } from '@angular/core';

@Component({
    selector: 'movieItem',
    styles: [`
  `],
    templateUrl: 'item.html',
})
export class Movie {

    @Input() movie = { poster_path: " ", title: " " };
    public  imagePath = 'http://image.tmdb.org/t/p/w185/';
    ngOnInit() {
        if (this.movie.poster_path == null ) {
            this.imagePath = 'assets/img/noImage.jpg';
            }
        }
    }




