import { Component, OnInit, Input } from '@angular/core';
import { StatContext } from '../info-stats/statContext';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  @Input() Context: StatContext;
  cid = 'linechart_material' + Math.floor(Math.random() * 1000) + 1;
  constructor() {}

  ngOnInit(): void {
    const p = new Promise((r) => {
      const i = setInterval(() => {
        if (document.getElementById(this.cid)) {
          r(true);
          this.ch();
          clearInterval(i);
        }
      }, 1000);
    });
    p.then((h) => console.log(h));
  }

  ch() {
    const google = (window as any).google;
    google.charts.load('current', { packages: ['line'] });

    const drawChart = () => {
      const data = new google.visualization.DataTable();
      this.Context.chartCols.forEach((element) => {
        data.addColumn(element.type, element.property);
      });
      const w = this.Context.data.map((j) => {
        const rr = [];

        this.Context.chartCols.forEach((element) => {
          if (element.type === 'number') {
            rr.push(Number(j[element.property]));
          } else {
            rr.push(j[element.property]);
          }
        });
        return rr;
      });
      data.addRows(w);

      const options = {
        chart: {
          title: this.Context.title,
          subtitle: this.Context.subtitle,
        },
        // width: window.innerWidth - 80,
        height: window.innerHeight / 2,
        backgroundColor: 'transparent',
        is3D: true,
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true,
        },
      };
      const chart = new google.charts.Line(document.getElementById(this.cid));

      chart.draw(data, google.charts.Line.convertOptions(options));
    };
    google.charts.setOnLoadCallback(drawChart);
  }
}
