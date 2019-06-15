import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import {tap,catchError} from "rxjs/operators"

@Injectable({
    providedIn:'root'
})
export class ProductService {

    constructor(private _httpClient: HttpClient){}
    private productUrl:string = 'api/products/products.json';
    
    getProducts():Observable<IProduct[]>{
        return this._httpClient.get<IProduct[]>(this.productUrl)
                               .pipe(
                                   tap((data)=>console.log(`Data: ${JSON.stringify(data)}`))
                                );   
    }
}