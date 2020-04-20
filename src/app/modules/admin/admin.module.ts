import { NewsService } from './news-service/news.service';
import { NgModule } from '@angular/core';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  providers: [NewsService],
  declarations: [AddNewsComponent, LoginComponent],
})
export class AdminModule {}
