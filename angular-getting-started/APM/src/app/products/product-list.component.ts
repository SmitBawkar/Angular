import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from "./product.service";


@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
      
    pageTitle:string = 'Acme Poducts';
    products:IProduct[];
    showImage:boolean = false;
    private _listFilter: string;  
    filteredList:IProduct[];
    ratingStarMsg:string;
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredList = value ? this.performFilter(this._listFilter): this.products;
    }
    
    constructor(private _productService:ProductService){
        }

    toogleImage():void{
        this.showImage = !this.showImage;               
    }  

    ngOnInit(): void {
      this._productService.getProducts().subscribe((products)=>{
        this.products=products
        this.filteredList = this.products;
      });
        
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }
    
    onRatingClicked(msg:string):void{
      this.ratingStarMsg=msg;
    }
}