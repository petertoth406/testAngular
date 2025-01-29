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
import { HttpClientModule } from '@angular/common/http';
import { TablazatComponent } from './tablazat/tablazat.component';
import { AddressComponent } from './address/address.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    OtherComponent,
    LoginComponent,
    ElsoOraComponent,
    HomeComponent,
    NavbarComponent,
    TablazatComponent,
    AddressComponent,
    CommentComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
