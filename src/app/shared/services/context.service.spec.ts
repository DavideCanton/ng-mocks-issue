import { TestBed } from '@angular/core/testing';
import { ContextService } from 'app/shared/services/context.service';

describe('ContextService', () => {
  let service: ContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
