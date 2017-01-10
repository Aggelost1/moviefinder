import { Component, Input } from '@angular/core';

@Component({
    selector: 'numNav',
    styles: [`
  `],
    templateUrl: 'page.number.html',
})
export class PageNum {

   @Input() num: number;
   
   
    ngOnInit() {
           }
    }



