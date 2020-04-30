import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html'
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
