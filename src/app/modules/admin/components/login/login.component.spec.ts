import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthenticationService } from 'src/app/services/auth-service/authentication.service';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthenticationService, MatSnackBar],
      imports: [AppModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when login', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    spyOn(component, 'onSubmit').and.returnValue();
    compiled.querySelector('button[type=submit]').click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
