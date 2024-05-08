 export class Product{
    id:number;
    name:string;
    description:string;
    brand:string;
    gender:string;
    category:string;
    size:number[];
    color:string[];
    price:number;
    disCountPrice?:number;
    is_in_inventory:boolean;
    items_left:number;
    imageUrl:string;
    slug:string
 }