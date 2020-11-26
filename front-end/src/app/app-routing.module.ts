import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PackagesComponent } from './packages/packages.component';
import { PlanetsPageComponent } from './planets-page/planets-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'planets', component: PlanetsPageComponent },
    { path: 'packages', component: PackagesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
