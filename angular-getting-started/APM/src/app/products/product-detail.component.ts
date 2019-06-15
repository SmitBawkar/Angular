import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import{ActivatedRoute,Route, Router} from '@angular/router'
import { ProductService } from './product.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute
             ,private router:Router
             ,private _productService: ProductService) { }
  pageTitle: string = 'Product Detail';
  product: IProduct; 
  
  onBackClick():void{
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    let productID: number = +this.route.snapshot.paramMap.get('id');
    this.pageTitle = `Proudct Details: ${productID}`;    
    this. product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }
}
