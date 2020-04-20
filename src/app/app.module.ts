import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { LatestNewsComponent } from './component/latest-news/latest-news.component';
import { PrecautionsComponent } from './component/precautions/precautions.component';
import { CoreServiceModule } from './services/service';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, LatestNewsComponent, PrecautionsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    AdminModule,
  ],
  providers: [CoreServiceModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
