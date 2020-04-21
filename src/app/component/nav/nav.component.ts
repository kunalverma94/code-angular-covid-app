import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth-service/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  hideNav = true;
  constructor(public auth: AuthenticationService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  toggle = () => (this.hideNav = !this.hideNav);

  openSnackBar(message: string, action: string = 'x') {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    return -1;
  }
}
