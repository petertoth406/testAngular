import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { HomeComponent } from './home/home.component';
import { TablazatComponent } from './tablazat/tablazat.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'elso-ora', component: ElsoOraComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tablazat', component: TablazatComponent},
  //{path: '', component: HomeComponent}
  {path: '', redirectTo: '/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
