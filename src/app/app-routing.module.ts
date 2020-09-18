import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PartnerModule } from './partner/partner.module';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'partner', loadChildren: './partner/partner.module#PartnerModule'}, 
  {path: 'login', component: LoginComponent}, 
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
