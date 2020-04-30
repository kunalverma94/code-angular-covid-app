import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, FormGroupDirective } from '@angular/forms';
import { NewsService } from '../../news-service/news.service';
import { News } from '../../news-service/news';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  profileForm = new FormGroup({
    Title: new FormControl(),
    Description: new FormControl(),
    Summary: new FormControl(),
    News: new FormControl(),
    Images: this.fb.array([]),
  });
  constructor(private fb: FormBuilder, private nvs: NewsService, private _snackBar: MatSnackBar) {}
  onSubmit(data, formDirective: FormGroupDirective) {
    this.profileForm.value.Images = this.profileForm.value.Images.filter((n) => n !== '' && n.length > 2);
    const res = this.nvs.PostNews(this.profileForm.value);
    if (res) {
      this.openSnackBar('Success News Posted !', 'ok');
      formDirective.resetForm();
      this.profileForm = new FormGroup({
        Title: new FormControl(),
        Description: new FormControl(),
        Summary: new FormControl(),
        News: new FormControl(),
        Images: this.fb.array([]),
      });
      this.profileForm.reset();
    } else {
      this.openSnackBar('Error News Post', 'ok');
    }
  }
  ngOnInit(): void {}
  get ImagesFB() {
    return this.profileForm.get('Images') as FormArray;
  }

  addAlias(f) {
    f.click();
    f.oninput = () => {
      Array.from(f.files).forEach((file: any) => {
        const fr = new FileReader();
        fr.onload = (e) => {
          this.ImagesFB.push(this.fb.control(fr.result));
        };
        fr.readAsDataURL(file);
      });
    };
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
