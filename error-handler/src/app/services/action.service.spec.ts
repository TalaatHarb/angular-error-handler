import { TestBed } from '@angular/core/testing';

import { ActionService } from './action.service';
import { HttpClientModule } from '@angular/common/http';

describe('ActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: ActionService = TestBed.get(ActionService);
    expect(service).toBeTruthy();
  });
});
