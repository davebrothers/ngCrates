import { TestBed, inject } from '@angular/core/testing';

import { InMemoryAlbumService } from './in-memory-album.service';

describe('InMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryAlbumService]
    });
  });

  it('should be created', inject([InMemoryAlbumService], (service: InMemoryAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
