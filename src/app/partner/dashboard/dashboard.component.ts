import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api: HttpService) { }

  ngOnInit(): void {

    this.api.get(environment.apiUrl+'/order/idle_orders?page=0')
          .subscribe(res => {
            console.log(res);
          }, (err) => {
            console.log(err);
            
          });
  }

}
