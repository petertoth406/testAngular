import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { OtherComponent } from './other/other.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablazatComponent } from './tablazat/tablazat.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    OtherComponent,
    LoginComponent,
    ElsoOraComponent,
    HomeComponent,
    NavbarComponent,
    TablazatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
