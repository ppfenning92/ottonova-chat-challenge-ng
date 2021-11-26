import { TestBed } from '@angular/core/testing';

import { CommandResponseService } from './command-response.service';

describe('CommandResponseService', () => {
  let service: CommandResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
