import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct:Product;
  
product=[
  {
    id:1,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:140,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run",
  },
  {
    id:2,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:120,
    is_in_inventory:false,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:3,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:100,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:4,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:160,
    is_in_inventory:false,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:5,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:140,
    is_in_inventory:false,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:6,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:140,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:7,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:140,
    is_in_inventory:false,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:8,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:140,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:9,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:110,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:10,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:190,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:11,
    name:"Sulton",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:110,
    is_in_inventory:false,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:12,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:140,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:13,
    name:"Sulton",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:120,
    disCountPrice:140,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:14,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:130,
    disCountPrice:140,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:15,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:160,
    disCountPrice:140,
    is_in_inventory:false,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  {
    id:16,
    name:"Nike React",
    description:"Lorem ddhd dhdhhd ssjsjd dkdkkd  djbsdbfjsf sdfbjsdf",
    brand:"Nike",
    gender:'Men',
    category:'Running',
    size:[6,7,8,9],
    color:['White','Blue','Black'],
    price:140,
    disCountPrice:140,
    is_in_inventory:true,
    items_left:3,
    imageUrl:"https://aryba.kg/uploads/posts/2020-01/1578724816_margulan-sejsembaj.jpg",
    slug:"nike-react-infinity-run"
  },
  
 
]

totalProductCount = this.product.length;
totalProductInStock = this.product.filter(p=>p.is_in_inventory===true).length
totalProductOutOfStock = this.product.filter(p=>p.is_in_inventory===false).length

selectedFilterRadioButton:string ='all';

@Input()
searchText:string =''



onFilterChanged(value:string){
  this.selectedFilterRadioButton=value
}





}
