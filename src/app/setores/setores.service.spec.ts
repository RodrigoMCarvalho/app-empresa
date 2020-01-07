import { TestBed } from '@angular/core/testing';

import { SetoresService } from './setores.service';

describe('SetoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetoresService = TestBed.get(SetoresService);
    expect(service).toBeTruthy();
  });
});
