import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStatsComponent } from './info-stats.component';
import { AppModule } from 'src/app/app.module';

describe('InfoStatsComponent', () => {
  let component: InfoStatsComponent;
  let fixture: ComponentFixture<InfoStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoStatsComponent],
      imports: [AppModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStatsComponent);
    component = fixture.componentInstance;
    component.Context = {
      chartCols: [
        { property: 'a', type: 'number' },
        { property: 'b', type: 'number' },
      ],
      data: [
        { a: 5, b: 10 },
        { a: 5, b: 10 },
        { a: 5, b: 10 },
      ],
      exclude: [],
    };
    fixture.detectChanges();
  });

  it('should load component', () => {
    expect(component).toBeTruthy();
  });
  it('should load pagination', () => {
    expect(component.pgg).toBeTruthy();
  });
});
