import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { SearchComponent } from './search.component';

describe('Search', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      SearchComponent
    ]
  }));

  it('should log ngOnInit', inject([SearchComponent], (search: SearchComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    search.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
