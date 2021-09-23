import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { APIsComponent } from './apis/apis.component';
import { LoginComponent, WildComponent } from "@public-apis/ui-login";
import { APIComponent } from './api/api.component';
import { FeaturesAuthGuard, FeaturesUnAuthGuard } from '@public-apis/core-data';

const routes: Route[] = [
  {path: '', component: LoginComponent, canActivate: [FeaturesAuthGuard] },
  {path: 'wild', component: WildComponent},
  {path: 'entries', component: APIsComponent, canActivate: [FeaturesAuthGuard]},
  {path: 'entries/:API', component: APIComponent, canActivate: [FeaturesAuthGuard] },
  {path: 'login', component: LoginComponent, canActivate: [FeaturesUnAuthGuard] },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }