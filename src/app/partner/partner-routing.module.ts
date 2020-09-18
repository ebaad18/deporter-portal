import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { PartnerComponent } from './partner.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerComponent,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'orders', component:OrdersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
