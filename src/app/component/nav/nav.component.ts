import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth-service/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  hideNav = false;
  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  toggle = () => (this.hideNav = !this.hideNav);

  openSnackBar(message: string, action: string = 'x') {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    return -1;
  }
  odd() {
    this.dialog.open(DialogBoxComponent, {
      width: window.innerWidth + 'px',
    });
  }
}
