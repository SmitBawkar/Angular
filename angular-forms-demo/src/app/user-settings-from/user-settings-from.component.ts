import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataAccessService } from '../data/data-access.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'fmd-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css']
})
export class UserSettingsFromComponent implements OnInit {
  isPostError;
  postErrorMsg;
  constructor(
    private _dataService:DataAccessService
  ) { }
  userSettings: UserSettings = {
    name:null,
    email:null,
    userInterface:null,
    subscriptionType:null,
    notes:null
  }
  oguserSettings:UserSettings ={...this.userSettings};

  onSubmit(formUserSetting:NgForm): void{
    if(formUserSetting.valid)
    {
      this._dataService.postData(this.userSettings).subscribe(
        (products)=>console.log(products),
        (err)=>{
          this.isPostError =true;
          this.postErrorMsg = err.errorMessage;
        }
      );
    }
  }

  ngOnInit() {

  }

}
