import { NgModule } from '@angular/core';
import { StateDataService } from './state-data-service/state-data.service';
import { StatisticsService } from './statistics-service/statistics.service';

@NgModule({
  providers: [StateDataService, StatisticsService],
})
export class CoreServiceModule {}
