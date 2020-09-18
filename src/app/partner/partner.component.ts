import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('sidebar') sidenav: MatSidenav;

  toggleSidebar(sidebar: MatSidenav) {
    sidebar.toggle();
  }

  closeSidebar() {
    if (window.innerWidth < 992) {
      this.sidenav.close();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 992) {
      this.sidenav.close();
      this.sidenav.mode = 'over';
    }
    if (event.target.innerWidth > 991) {
      this.sidenav.open();
      this.sidenav.mode = 'side';
    }
  }

}
