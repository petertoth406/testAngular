import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { LoginComponent } from './login/login.component';
import { TablazatComponent } from './tablazat/tablazat.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "elso-ora", component: ElsoOraComponent},
  {path: "login", component: LoginComponent},
  {path: 'tablazat', component: TablazatComponent},
  {path: "users", component: UsersComponent},
  //{path: "", component: HomeComponent}
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
