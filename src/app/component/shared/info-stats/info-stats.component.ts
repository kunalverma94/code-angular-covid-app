import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { StatContext } from './statContext';

@Component({
  selector: 'app-info-stats',
  templateUrl: './info-stats.component.html',
  styleUrls: ['./info-stats.component.css'],
})
export class InfoStatsComponent implements OnInit {
  @Input() Context: StatContext;
  displayedColumns: string[];
  dataSource: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) pgg: MatPaginator;
  length = 0;
  constructor() {}

  ngOnInit() {
    if (this.Context.data) {
      this.dataSource = new MatTableDataSource(this.Context.data);
      this.displayedColumns = Object.keys(this.Context.data[0]).filter((b) => this.Context.exclude.indexOf(b) < 0);
      console.log(this.displayedColumns);
      this.length = this.dataSource.data.length;
      this.dataSource.paginator = this.pgg;
    }
  }
}
