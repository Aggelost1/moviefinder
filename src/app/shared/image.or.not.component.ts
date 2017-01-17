import { Component, Input } from '@angular/core';
import {UrlList} from './models/find.models';
//this component takes an input of an array with two strings first should be standart path
// and the second should be the extention for the specific image you want to display (if it is null) it returns a cashed "no-image image 

@Component({
    selector: 'imag',
    styles: [`
  `],
    template: '<img src="{{urlP1}}{{urlP2}}" (error)="updateUrl($event)">',
   
})
export class Poster {
 @Input() urls: UrlList;
 urlP1:string;
 urlP2:string;

    ngOnInit() {
    this.urlP1 = this.urls.first;
    this.urlP2 = this.urls.second;
        
        if ( this.urlP2 == null ) {
           this.urlP1 = 'assets/img/noImage.jpg';
           }
           
        }
    public   updateUrl($event) {
     this.urlP1 = 'assets/img/noImageCurrently.jpg';
    }
}
