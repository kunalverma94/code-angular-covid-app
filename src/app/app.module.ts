import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './component/dashboard/dashboard.component';

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
import { InfoStatsComponent } from './component/shared/info-stats/info-stats.component';
import { GraphComponent } from './component/shared/graph/graph.component';
import { StateComponent } from './component/shared/state/state.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialUIModule } from './modules/material/material-module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './component/shared/error/error.component';
import { DialogBoxComponent } from './component/shared/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrecautionsComponent,
    NewsComponent,
    NavComponent,
    LogoComponent,
    InfoStatsComponent,
    GraphComponent,
    StateComponent,
    ErrorComponent,
    DialogBoxComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialUIModule,
    CommonModule,
  ],
  exports: [MaterialUIModule],
  providers: [HttpClientModule, CoreServiceModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
