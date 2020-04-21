import { Injectable } from '@angular/core';
import { News } from './news';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news: News[] = [
    {
      Title: 'Coronavirus LIVE updates: India cases spike to 18,985; death toll at 603',
      Description: `Coronavirus world tracker: Total number of coronavirus cases in India has reached 18,985,
         and the global tally stands at 2,503,470. Stay with Business Standard for Covid-19 corona LIVE updates`,
      Images: ['assets/news.png', 'assets/news2.png', 'assets/news.png', 'assets/news2.png'],
      News: `Coronavirus India update: At least 18,985 positive coronavirus (Covid-19) 
        cases have been reported across the country so far, Lav Agrawal, the Joint Secretary in the Health Ministry,
         told the press conference on Tuesday. As many as 3,252 people have been cured till
          now, he said, adding 705 of them recovered on Monday.`,
      Summary: `Overall 1,336 new cases were reported in the last 24 hours, and, the country'
      s Covid-19 death toll stood at 603. The Union Health Ministry also said that the country's 
      recovery rate of coronavirus patients is 17.48 per cent and 3,252 patients have been cured so far. 
      World update on coronavirus: Globally, 2,503,470 people have been infected and 171,810 have died so
       far, according to Worldometer. The United States on Tuesday decided to suspend immigration to protect jobs.`,
    },
    {
      Title: 'Coronavirus LIVE updates: India cases spike to 18,985; death toll at 603',
      Description: `Coronavirus world tracker: Total number of coronavirus cases in India has reached 18,985,
         and the global tally stands at 2,503,470. Stay with Business Standard for Covid-19 corona LIVE updates`,
      Images: ['assets/news.png', 'assets/news2.png', 'assets/news.png', 'assets/news2.png'],
      News: `Coronavirus India update: At least 18,985 positive coronavirus (Covid-19) 
        cases have been reported across the country so far, Lav Agrawal, the Joint Secretary in the Health Ministry,
         told the press conference on Tuesday. As many as 3,252 people have been cured till
          now, he said, adding 705 of them recovered on Monday.`,
      Summary: `Overall 1,336 new cases were reported in the last 24 hours, and, the country'
      s Covid-19 death toll stood at 603. The Union Health Ministry also said that the country's 
      recovery rate of coronavirus patients is 17.48 per cent and 3,252 patients have been cured so far. 
      World update on coronavirus: Globally, 2,503,470 people have been infected and 171,810 have died so
       far, according to Worldometer. The United States on Tuesday decided to suspend immigration to protect jobs.`,
    },
  ];
  public newssvc = localStorage.getItem('crnews');
  constructor() {}
  public getNews(): News[] {
    this.seed();
    return this.news;
  }
  public PostNews(news: News): boolean {
    this.seed();
    try {
      this.news.push(news);
      localStorage.setItem('crnews', JSON.stringify(this.news));
    } catch (error) {
      return false;
    }
    return true;
  }
  private seed() {
    const lc = localStorage.getItem('crnews');
    if (!lc) {
      localStorage.setItem('crnews', JSON.stringify(this.news));
    }
    this.news = JSON.parse(lc);
  }
}
