import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth-service/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  hideNav = true;
  constructor(public auth: AuthenticationService, private _snackBar: MatSnackBar, public dialog: MatDialog) {}
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
