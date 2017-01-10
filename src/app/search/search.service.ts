import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
    pageNum: number;
    value: string;
    apiKey: string;
    searchUrlp1: string;
     searchUrlp2: string;
    searchUrl: string;
    movieQuery: string;
    constructor(private http: Http) {
      this.apiKey = '0af0cd62a4131f05e9e97a450fbee87f';
      this.movieQuery = 'query=';
      this.searchUrlp1 = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=`;
      this.searchUrlp2 ='&include_adult=false&';
      this.value = '';
    };

    public movieSearch(value: string,num : number ): Observable<any>{
       this.searchUrl =  this.searchUrlp1 + num.toString() +  this.searchUrlp2 ;
      this.movieQuery = `query=${value}`;
      return this.http.get(this.searchUrl + this.movieQuery)
        .map(this.extractMovieData);
    }

    private extractMovieData(res: Response) {
      let body = res.json();
      return body || [];
    }

}
