import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'fmd-user-settings-from',
  templateUrl: './user-settings-from.component.html',
  styleUrls: ['./user-settings-from.component.css']
})
export class UserSettingsFromComponent implements OnInit {

  constructor() { }
  userSettings: UserSettings = {
    name:'Smit',
    email:true,
    userInterface:'Dark',
    subscriptionType:'Annual',
    notes:'Notes goes here'
  }
  oguserSettings:UserSettings ={...this.userSettings};

  ngOnInit() {

  }

}
