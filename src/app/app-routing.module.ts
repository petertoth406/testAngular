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

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "elso-ora", component: ElsoOraComponent},
  {path: "login", component: LoginComponent},
  {path: 'tablazat', component: TablazatComponent},
  {path: "users", component: UsersComponent},
  {path: "posts", component: PostsComponent},
  {
    path: "products", 
    component: ProductsComponent,
    children: [
      {path: "new", component:NewProductComponent, /*children: [
        {path: "asd", component: OtherComponent}
      ]*/},
      {path: "update", component: UpdateProductComponent}
    ]
  },
  //{path: "", component: HomeComponent}
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
