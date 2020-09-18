import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['customer_name','dest_city', 'dest_location', 'source_city', 'source_location', 'vehicle', 'my_price', 'goods_weight'];
  constructor(private api:HttpService) { }

  ngOnInit(): void {
    this.getIdleOrders();
  }

  getIdleOrders(){
    this.api.get(environment.apiUrl+'/order/idle_orders?page=0')
          .subscribe(res => {
            console.log(res);
            this.dataSource = res.result;
            console.log(this.dataSource);
          }, (err) => {
            console.log(err);
            
          });
  }

}
