import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { AuthenticationService } from 'src/app/services/auth-service/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogoComponent } from '../shared/logo/logo.component';
import { AppModule } from 'src/app/app.module';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent, LogoComponent],
      imports: [AppModule],
      providers: [AuthenticationService, MatDialog, MatSnackBar, AuthenticationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should openSnackBar', () => {
    const res = component.openSnackBar('msg', 'x');
    expect(res).toBe(-1);
  });
});
