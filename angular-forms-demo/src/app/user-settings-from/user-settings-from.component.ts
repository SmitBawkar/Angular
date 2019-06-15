import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fmd-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css']
})
export class UserSettingsFromComponent implements OnInit {

  constructor() { }
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
      console.log(formUserSetting.value);
  }
  ngOnInit() {

  }

}
