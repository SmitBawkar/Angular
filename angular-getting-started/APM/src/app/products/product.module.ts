import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductsDetailsGuard } from './products-details.guard';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      { path:'products/:id',
        canActivate:[ProductsDetailsGuard],
        component:ProductDetailComponent
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
