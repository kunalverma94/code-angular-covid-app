import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth-service/authentication.service';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService, private router: Router, private _snackBar: MatSnackBar) {}

  login = new FormGroup({
    user: new FormControl('admin'),
    password: new FormControl('admin'),
  });
  loading = false;

  onSubmit() {
    this.loading = true;
    this.auth
      .login(this.login.value)
      .pipe(delay(3000))
      .subscribe((u) => {
        if (u) {
          const oo = this.router.parseUrl(this.router.url);
          let returl = oo.queryParams.returnUrl;
          if (!returl) {
            returl = '/home';
          }
          this.openSnackBar('Login Success');
          this.router.navigate([returl]);
        } else {
          this.openSnackBar('Invalid credetials Please try again.!');
        }
        this.loading = false;
      });
  }

  ngOnInit(): void {
    try {
      if (this.auth.CurrentUser && this.auth.CurrentUser.user) {
        this.router.navigate(['/home']);
      }
      const rt = this.router.parseUrl(this.router.url).queryParams.returnUrl;
      if (rt && rt.search('addnews') > -1) {
        this.openSnackBar('Only admin can add News.Please Login');
      }
    } catch (error) {}
  }

  openSnackBar(message: string, action: string = 'x') {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
