import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { userservice } from './userService';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProductsComponent } from './products/products.component';
import { productService } from './productService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoomDialogComponent } from './zoom-dialog/zoom-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    HomeComponent,
    ResetPasswordComponent,
    ProductsComponent,
    ZoomDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    userservice,
    productService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
