import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news: any[] = ['news 1'];
  getNews() {}
}
