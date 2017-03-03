import { TestBed, inject } from '@angular/core/testing';
import { RepoService } from './repo.service';

describe('RepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoService]
    });
  });

  it('should ...', inject([RepoService], (service: RepoService) => {
    expect(service).toBeTruthy();
  }));
});
