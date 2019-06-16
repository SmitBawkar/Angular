import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(
    private _httpService:HttpClient
    ) { }
  
  postData(userSettings:UserSettings):Observable<any>{
   return this._httpService.post('https://putsreq.com/ly6DpU17fWQpPNusdaR5',userSettings);
  }
}
