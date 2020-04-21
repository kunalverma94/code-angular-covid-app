import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/modules/admin/news-service/news.service';
import { News } from 'src/app/modules/admin/news-service/news';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  panelOpenState = true;
  news: News[] = [];
  constructor(private nvs: NewsService) {
    this.news = nvs.getNews();
  }
  see(e) {
    e.target.src = 'assets/404.png';
  }
  ngOnInit(): void {}
}
