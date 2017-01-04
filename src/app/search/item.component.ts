import { Component, Input } from '@angular/core';

@Component({
    selector: 'movieItem',
    styles: [`
  `],
    templateUrl: 'item.html',
})
export class Movie {
    @Input() movie: any;
}
