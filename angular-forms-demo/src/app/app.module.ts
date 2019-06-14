import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserSettingsFromComponent } from './user-settings-from/user-settings-from.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
