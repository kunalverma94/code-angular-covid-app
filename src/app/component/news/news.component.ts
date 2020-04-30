import { Component } from '@angular/core';
import { News } from 'src/app/modules/admin/news-service/news';
import { NewsService } from 'src/app/modules/admin/news-service/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  panelOpenState = true;
  news: News[] = [];
  constructor(private nvs: NewsService) {
    this.news = nvs.getNews();
  }
  see = (e) => (e.target.src = 'assets/404.png');
}
