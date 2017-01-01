import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class SearchService {
    value: string;
    apiKey: string;
    searchUrlp1: string;
    searchUrl: string;
    movieQuery: string;
    moviesList: Array<Object>;
    constructor(private http: Http) {
      this.apiKey = '0af0cd62a4131f05e9e97a450fbee87f';
      this.movieQuery = 'query=';
      this.searchUrlp1 = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`;
      this.searchUrl = this.searchUrlp1 + '&language=en-US&page=1&include_adult=false&';
      this.value = '';
    };

    public searchMovie(value: string) {
      this.movieSearch(value)
        .subscribe(this.handleMovieData);
    }

    private extractMovieData(res: Response) {
      let body = res.json();
      return body || {};
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
}
