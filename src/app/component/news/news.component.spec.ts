import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsComponent } from './news.component';
import { NewsService } from 'src/app/modules/admin/news-service/news.service';
import { MaterialUIModule } from 'src/app/modules/material/material-module';
import { AppModule } from 'src/app/app.module';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent],
      providers: [NewsService],
      imports: [AppModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch news', () => {
    expect(component.news).toBeDefined();
  });
});
