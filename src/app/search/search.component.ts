import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'search',
  styles: [`
  `],
  templateUrl: 'search.html'
})
export class SearchComponent {
  localState: any;
  value: string;
  apiKey: string;
  searchUrl: string;
  movieQuery: string;
  moviesList: Array<Object>;
  constructor(public route: ActivatedRoute, private http: Http) {
  }

  ngOnInit() {
    this.apiKey = '0af0cd62a4131f05e9e97a450fbee87f';
    this.movieQuery = 'query=avengers';
    this.searchUrl =`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false&`;
    this.value = '';
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from rarch hereoute
        this.localState = data.yourData;
      });

    console.log('hello `Search` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }

  public onEnter = (value: string) => {
      this.value = value;
      this.searchMovie(value);
  }

  private extractMovieData(res: Response) {
    let body = res.json();
    console.log(body);
    // return body.results || {};
    return 'lalakis';
  }

  private searchMovie(value: string) {
    this.movieSearch(value)
      .subscribe(this.handleMovieData)
  }

  private handleMovieData(res: Array<Object>) {
    console.log(res);
    this.moviesList = res;
  }

  private movieSearch(value: string): Observable<any>{
    this.movieQuery = `query=${value}`;
    return this.http.get(this.searchUrl + this.movieQuery)
      .map(this.extractMovieData);
  }

  // asyncDataWithWebpack() {
  //   // you can also async load mock data with 'es6-promise-loader'
  //   // you would do this if you don't want the mock-data bundled
  //   // remember that 'es6-promise-loader' is a promise
  //   setTimeout(() => {

  //     System.import('../../assets/mock-data/mock-data.json')
  //       .then(json => {
  //         console.log('async mockData', json);
  //         this.localState = json;
  //       });

  //   });
  // }

}
