import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Route} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductsDetailsGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.url[1].path;  
      if(isNaN(id) || id>10)
      {
        this._router.navigate(['/']);
        return false;
      }
      return true;
  }
}
