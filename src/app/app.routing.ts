import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './modules/admin/components/login/login.component';
import { AddNewsComponent } from './modules/admin/components/add-news/add-news.component';
import { NewsComponent } from './component/news/news.component';
import { PrecautionsComponent } from './component/precautions/precautions.component';
import { StateComponent } from './component/shared/state/state.component';
import { AuthorizationGuard } from './guard/authorization.guard';
export const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'state/:data', component: StateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'pre', component: PrecautionsComponent },
  { path: 'addnews', component: AddNewsComponent, canActivate: [AuthorizationGuard] },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
