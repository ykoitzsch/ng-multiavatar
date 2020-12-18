import { TestBed } from '@angular/core/testing';

import { NgMultiavatarService } from './ng-multiavatar.service';

describe('NgMultiavatarService', () => {
  let service: NgMultiavatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMultiavatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
