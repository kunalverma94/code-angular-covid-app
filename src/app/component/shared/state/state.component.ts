import { Component, OnInit } from '@angular/core';
import { StateDataService, StateData } from 'src/app/services/state-data-service/state-data.service';
import { ActivatedRoute } from '@angular/router';
import { StatContext } from '../info-stats/statContext';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
})
export class StateComponent implements OnInit {
  state: string;
  stateContext: StatContext;
  data: StateData = {};
  constructor(private stsvc: StateDataService, private rc: ActivatedRoute) {}
  ngOnInit(): void {
    this.rc.paramMap.subscribe((u) => {
      this.data.state = this.state = u.get('data');
      this.stsvc.getStatistics().subscribe((h: any) => {
        if (!h[this.state]) {
          this.data = null;
          return;
        }
        this.data.statecode = h[this.state].statecode;
        const dist = h[this.state].districtData;
        this.data.districts = Object.keys(dist).map((j) => ({ district: j, ...dist[j] }));

        this.stateContext = {
          data: this.data.districts,
          chartCols: [
            { type: 'string', property: 'district' },
            { type: 'number', property: 'active' },
            { type: 'number', property: 'confirmed' },
            { type: 'number', property: 'deceased' },
            { type: 'number', property: 'recovered' },
          ],
          exclude: ['delta'],
        };
      });
    });
  }
}
