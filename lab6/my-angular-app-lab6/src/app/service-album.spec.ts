import { TestBed } from '@angular/core/testing';

import { ServiceAlbum } from './service-album';

describe('ServiceAlbum', () => {
  let service: ServiceAlbum;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAlbum);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
