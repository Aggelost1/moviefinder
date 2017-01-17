/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./movies'] ">
          movies
        </a>
      </span>
      |
       <span>
        <a [routerLink]=" ['./search'] ">
          search
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <br>

    <footer>
      <span>The Best <a [href]="url">M0V!3 F!ND£R</a></span>
      <div>
        <a [href]="url2">
        <p>Sourced by: </p>
          <img [src]="apiLogo" width="10%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  apiLogo = 'assets/img/apiSourceLogo.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://github.com/Aggelost1/moviefinder';
  url2 = 'https://www.themoviedb.org/';


  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
