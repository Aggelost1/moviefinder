import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class FetchService {
    apiKey: string;
    searchUrlP1: string;
    searchUrlP2: string;
    searchUrl: string;
    movieId: string;
    constructor(private http: Http) {
      this.apiKey = '0af0cd62a4131f05e9e97a450fbee87f';
      this.movieId=' '
      this.searchUrlP1 = `https://api.themoviedb.org/3/movie/`;     
    };
// fetches specific movue using movie_id of api
    public movieFetch(value: string ): Observable<any>{
      this.movieId = value;
      this.searchUrlP2 = `${this.movieId}?api_key=${this.apiKey}&language=en-US` ;
      this.searchUrl = this.searchUrlP1+this.searchUrlP2;   
      return this.http.get(this.searchUrl)
        .map(this.extractMovieData);
    }

    private extractMovieData(res: Response) {
      let body = res.json();
      return body || [];
    }

}
