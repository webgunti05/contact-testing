import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/data.service';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private dropOpen : boolean;
  filterList : Array<any>
  constructor(private prodSvc : FilterService) {
    this.dropOpen = false;
    this.filterList = this.prodSvc.getFilterList();
   }

  ngOnInit() {
  }

  openDropDownList(){
    this.dropOpen = !this.dropOpen;
  }

}
