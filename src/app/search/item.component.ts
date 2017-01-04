import { Component, Input } from '@angular/core';

@Component({
    selector: 'movieItem',
    styles: [`
  `],
    templateUrl: 'item.html',
})
export class Movie {
    @Input() movie: any;
    public imagePath = 'http://image.tmdb.org/t/p/w185/';

}
