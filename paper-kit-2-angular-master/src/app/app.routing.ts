import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LandingComponent } from "./examples/landing/landing.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { HomeComponent } from "./home/home.component";
import { PlanetsComponent } from "./planets/planets.component";
import { PlannerComponent } from "./planner/planner.component";
import { PackagesComponent } from "./packages/packages.component";
import { LoginComponent } from "./auth/login/login.component";
import { OrdersCreateComponent } from "./orders/orders-create/orders-create.component";
import { OrdersModifyComponent } from "./orders/orders-modify/orders-modify.component";
import { OrdersIndexComponent } from "./orders/orders-index/orders-index.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { OrdersCancelComponent } from "./orders/orders-cancel/orders-cancel.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "planets", component: PlanetsComponent },
  { path: "planner", component: PlannerComponent },
  { path: "packages", component: PackagesComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "orders", component: OrdersIndexComponent },
  { path: "orders/edit", component: OrdersModifyComponent },
  { path: "orders/create", component: OrdersCreateComponent },
  { path: "orders/cancel", component: OrdersCancelComponent },
  { path: "components", component: ComponentsComponent },
  { path: "user-profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "statistics", component: StatisticsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
