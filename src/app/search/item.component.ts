import { Component} from '@angular/core';
import { Input} from '@angular/core';

@Component({
    selector: 'movieItem',
    styles: [`
  `],
    templateUrl: 'item.html',
})
export class MovieInit {
    @Input() public moviesdata = { page: 12, results: Array, total_results: 0, total_pages: 0 };
    @Input() public movie = { original_title: "12", results: Array, total_results: 0, total_pages: 0 };
//    { original_title: 0, results: Array, total_results: 0, total_pages: 0 };
    
}
