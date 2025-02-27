import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { HomeComponent } from './home/home.component';
import { TablazatComponent } from './tablazat/tablazat.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'elso-ora', component: ElsoOraComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'tablazat', component: TablazatComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductsComponent, canActivate:[AuthGuard], /*canActivateChild: [AuthGuard],*/ children: [
    {path: 'new', component: NewProductComponent},
    {path: 'update', component: UpdateProductComponent}
  ]},

  //{path: '', component: HomeComponent}
  {path: '', redirectTo: '/login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
