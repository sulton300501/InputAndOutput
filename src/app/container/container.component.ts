import { Component, ViewChild } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

listOfString : string[]=['Mark','Steve','Merry','John','Sarah']

searchText:string='';


@ViewChild(ProductListComponent) productListComponent: ProductListComponent;



setSearchText(event:string){
this.searchText=event
}




}

