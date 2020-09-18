import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerRoutingModule } from './partner-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './partner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { PartnerSidebarComponent } from './partner-sidebar/partner-sidebar.component';
import { PartnerHeaderComponent } from './partner-header/partner-header.component';
import { PartnerFooterComponent } from './partner-footer/partner-footer.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [DashboardComponent, PartnerComponent, PartnerSidebarComponent, PartnerHeaderComponent, PartnerFooterComponent, OrdersComponent],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatStepperModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class PartnerModule { }
