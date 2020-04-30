import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardComponent } from './dashboard.component';
import { MatDialog } from '@angular/material/dialog';
import { StatisticsService } from 'src/app/services/statistics-service/statistics.service';
import { AppModule } from 'src/app/app.module';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        AppModule,
      ],
      providers: [StatisticsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // tslint:disable-next-line: no-string-literal
    spyOn(component['stats'], 'getStatistics').and.returnValue(
      of({
        StateWise: [] as any,
        casetime: [],
        tested: [],
        CasesTimeSeries: [],
      })
    );
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should load service data', () => {
    component.ngOnInit();
    expect(component.casetime).toBeDefined();
    expect(component.state).toBeDefined();
  });
});
