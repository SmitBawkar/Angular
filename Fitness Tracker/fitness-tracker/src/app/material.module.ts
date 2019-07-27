import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule,
        MatInputModule, MatDatepickerModule, MatNativeDateModule,
        MatCheckboxModule, MatToolbarModule, MatSidenavModule,
        MatListModule, MatTabsModule, MatCardModule, MatSelectModule} from '@angular/material';

const matModules = [
                  MatButtonModule,
                  MatIconModule,
                  MatFormFieldModule,
                  MatInputModule,
                  MatDatepickerModule,
                  MatNativeDateModule,
                  MatCheckboxModule,
                  MatToolbarModule,
                  MatSidenavModule,
                  MatListModule,
                  MatTabsModule,
                  MatCardModule,
                  MatSelectModule
                ];

@NgModule({
  imports : matModules,
  exports : matModules
})
export class MaterialComponent {}
