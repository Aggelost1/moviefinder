import { Component, Input } from '@angular/core';

@Component({
    selector: 'numNav',
    styles: [`
  `],
    template: '<p>{{num}}&ensp;</p>',
})
export class PageNum {

   @Input() num: number;
   
   
    ngOnInit() {
           }
    }



