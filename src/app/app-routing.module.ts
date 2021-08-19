import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'main',
    component:MainComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'products',
        component:ProductsComponent
      },
      {
        path:'add-product',
        component:AddProductComponent
      },
      {
        path:'product/:id',
        component:ViewProductComponent
      }
    ]
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
