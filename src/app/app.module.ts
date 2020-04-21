import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { PrecautionsComponent } from './component/precautions/precautions.component';
import { CoreServiceModule } from './services/service';
import { AdminModule } from './modules/admin/admin.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NewsComponent } from './component/news/news.component';
import { AppRoutingModule } from './app.routing';
import { NavComponent } from './component/nav/nav.component';
import { AppComponent } from './home/app.component';
import { LogoComponent } from './component/shared/logo/logo.component';
import { MaterialUIModule } from './modules/material/material-module';
import { InfoStatsComponent } from './component/shared/info-stats/info-stats.component';
import { GraphComponent } from './component/shared/graph/graph.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PrecautionsComponent, NewsComponent, NavComponent, LogoComponent, InfoStatsComponent, GraphComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
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
    MaterialUIModule,
  ],
  providers: [HttpClientModule, CoreServiceModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
