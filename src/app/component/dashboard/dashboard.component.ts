import { Component, ViewChild, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics-service/statistics.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Statistics, StateWise } from 'src/app/services/statistics-service/Statistics';
import { MatPaginator } from '@angular/material/paginator';
import { StatContext } from '../shared/info-stats/statContext';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public data: Statistics;
  public state: StatContext = {};
  public casetime: StatContext = {};
  public tested: StatContext = {};
  loading = true;
  constructor(private stats: StatisticsService) {}
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
        exclude: ['testsconductedbyprivatelabs', 'positivecasesfromsamplesreported', 'samplereportedtoday'],
      };
      this.loading = false;
    });
  }
}
