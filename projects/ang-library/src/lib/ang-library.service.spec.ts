import { TestBed } from '@angular/core/testing';

import { AngLibraryService } from './ang-library.service';

describe('AngLibraryService', () => {
  let service: AngLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
