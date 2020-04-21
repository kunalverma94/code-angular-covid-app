import { NewsService } from './news-service/news.service';
import { NgModule } from '@angular/core';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialUIModule } from '../material/material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  providers: [NewsService],
  declarations: [AddNewsComponent, LoginComponent],
  imports: [MaterialUIModule, ReactiveFormsModule, FormsModule, CommonModule, BrowserModule],
  exports: [CommonModule],
})
export class AdminModule {}
