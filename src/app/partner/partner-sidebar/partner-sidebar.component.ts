import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-partner-sidebar',
  templateUrl: './partner-sidebar.component.html',
  styleUrls: ['./partner-sidebar.component.css']
})
export class PartnerSidebarComponent implements OnInit {
  
  @Output('sidebarAction') sidebarAction = new EventEmitter();
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  closeSidebar() {
    this.sidebarAction.emit();
  }

  logout(){
    localStorage.removeItem('userName');
    this.router.navigateByUrl('/login');
  }

}
