import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-partner-header',
  templateUrl: './partner-header.component.html',
  styleUrls: ['./partner-header.component.css']
})
export class PartnerHeaderComponent implements OnInit {
  @Output('sidebarAction') sidebarAction = new EventEmitter();
  userName;
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }

  toggleSidebar() {
    this.sidebarAction.emit();
}

}
