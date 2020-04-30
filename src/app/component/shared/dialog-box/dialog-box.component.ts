import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  template: `<h1 mat-dialog-title>Hi User</h1>
    <div mat-dialog-content style="overflow: visible;">
      <p>Please Find Directions to use this site:</p>
      <div class="content">
        <ul>
          <li>Click on <app-logo [size]="30"></app-logo> To access Menu.</li>
          <li>Dashbord show state data.</li>
          <li>Click on state to view Data of district under states.</li>
          <li>This is Proof Concept Of real site.</li>
          <li>View And add Latest News And follow Precautions.</li>
          <li>Username and Password is 'admin'.</li>
          <li>Only admin can add news else you will be redirected to login.</li>
        </ul>
        <mat-checkbox [(ngModel)]="ch" (change)="set($event)"> Dont Show again</mat-checkbox>
      </div>
    </div>
    <div mat-dialog-actions style="display: flex; justify-content: center; align-content: center;">
      <button style="width: 100%;" mat-button [mat-dialog-close]="0" cdkFocusInitial>Ok</button>
    </div> `,
})
export class DialogBoxComponent {
  ch = localStorage.getItem('first') && localStorage.getItem('first') === '1';
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  set(ch) {
    if (ch.checked) {
      localStorage.setItem('first', '1');
    } else {
      localStorage.removeItem('first');
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
