import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/data.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private dropOpen : boolean;
  filterList : Array<any>;
  ProductList : Array<any>;
  private carsList : Array<any>;
  private serviceList : Array<any>;
  private timings : Array<any>;
  User : any;
  private open_bookapoint : boolean;


  constructor(private prodSvc : FilterService, private prolistSvc : ProductService) {
    this.User = {
     
    }
    this.dropOpen = false;
    this.open_bookapoint = false;
    this.filterList = this.prodSvc.getFilterList();
    this.getProductList();
    this.carsList = ["Maruthi Suzuki", "Automobile Part Dealers", "Services-Ford", "Services-Honda", "Automobile Battery Dealers-Exide"];
    this.serviceList = [" Maruti Suzuki", " Automobile Part Dealers", " Services-Ford", "Services-Honda", " Automobile Battery Dealers-Exide"];
    this.timings = ["02:00PM - 04:00PM", "03:00PM - 05:00PM", "04:00PM - 06:00PM"];
   }

  ngOnInit() {
   

  }
  openBookApointment(){
    this.open_bookapoint = !this.open_bookapoint;
  }

  openDropDownList(){
    this.dropOpen = !this.dropOpen;
  }

  getProductList(){
    return this.prolistSvc.getProductList()
    .subscribe(result =>{
      console.log(result);
      this.ProductList = result.ProductList;
    })
  }

  getCarsList(){
    return this.carsList;
  }

  getServiceList(){
    return this.serviceList;
  }
  gettimingsList(){
    return this.timings;
  }

}