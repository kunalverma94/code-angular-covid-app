import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics-service/statistics.service';
import { StatContext } from '../../Models/statContext';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../shared/dialog-box/dialog-box.component';
import { Statistics } from 'src/app/Models/Statistics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public data: Statistics;
  public state: StatContext = {};
  public casetime: StatContext = {};
  public tested: StatContext = {};
  loading = true;
  constructor(private stats: StatisticsService, public dialog: MatDialog) {}
  ngOnInit() {
    this.stats.getStatistics().subscribe((k) => {
      this.state = {
        data: k.StateWise,
        chartCols: [
          { type: 'string', property: 'statecode' },
          { type: 'number', property: 'deaths' },
          { type: 'number', property: 'recovered' },
          { type: 'number', property: 'active' },
        ],
        exclude: ['deltaconfirmed', 'deltadeaths', 'deltarecovered', 'statecode', 'statenotes', 'lastupdatedtime'],
      };

      this.casetime = {
        data: k.CasesTimeSeries,
        chartCols: [
          { type: 'number', property: 'dailyconfirmed' },
          { type: 'number', property: 'dailydeceased' },
          { type: 'number', property: 'dailyrecovered' },
          { type: 'string', property: 'date' },
          { type: 'number', property: 'totalconfirmed' },
          { type: 'number', property: 'totaldeceased' },
          { type: 'number', property: 'totalrecovered' },
        ],
        exclude: [],
      };

      this.tested = {
        data: k.tested,
        chartCols: [
          { type: 'number', property: 'totalindividualstested' },
          { type: 'number', property: 'totalsamplestested' },
          { type: 'number', property: 'totalpositivecases' },
        ],
        exclude: [
          'source',
          'individualstestedperconfirmedcase',
          'testsconductedbyprivatelabs',
          'positivecasesfromsamplesreported',
          'samplereportedtoday',
        ],
      };
      this.loading = false;
      this.openDialog();
    });
  }
  openDialog(): void {
    const f = localStorage.getItem('first');
    if (f && f === '1') {
      return;
    }
    this.dialog.open(DialogBoxComponent, {});
  }
}
