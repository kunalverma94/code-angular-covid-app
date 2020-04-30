import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AppModule } from 'src/app/app.module';
import { RouterModule } from '@angular/router';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterModule],
      imports: [AppModule],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get CurrentUSer', () => {
    const u = service.CurrentUser || {};
    expect(u).toBeDefined();
  });
  it('should IsAuhoriesd return boolean', () => {
    const u = service.IsAuthorised;
    expect(u).toBeDefined();
  });
});
