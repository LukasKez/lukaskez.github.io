import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PackagesComponent } from './packages/packages.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlanetsPageComponent } from './planets-page/planets-page.component';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        PackagesComponent,
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        PlanetsPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [HomePageComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
