import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { LoginComponent } from './login/login.component';
import { TablazatComponent } from './tablazat/tablazat.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { OtherComponent } from './other/other.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [authGuard]},
  {path: "elso-ora", component: ElsoOraComponent, canActivate: [authGuard]},
  {path: "login", component: LoginComponent},
  {path: 'tablazat', component: TablazatComponent, canActivate: [authGuard]},
  {path: "users", component: UsersComponent, canActivate: [authGuard]},
  {path: "posts", component: PostsComponent, canActivate: [authGuard]},
  {
    path: "products", 
    component: ProductsComponent, canActivateChild: [authGuard],
    children: [
      {path: "new", component:NewProductComponent, /*children: [
        {path: "asd", component: OtherComponent}
      ]*/},
      {path: "update", component: UpdateProductComponent }
    ]
  },
  //{path: "", component: HomeComponent}
  {path: "", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
