import {
  inject,
  TestBed
} from '@angular/core/testing';

import { ApiService } from './api.service';

describe('Api Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ApiService]
    });
  });

  it('title property text should be "Angular 2"', inject([ApiService], (api: ApiService) => {
    expect(api.title).toBe('Angular 2');
  }));
});
